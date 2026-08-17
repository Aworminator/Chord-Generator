import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { songArray } from "./components/songArray";

const COLUMN_SAFETY_BUFFER_PX = 2;

function buildFlowItems(songs) {
  const items = [];

  songs.forEach((song, songIndex) => {
    items.push({
      type: "song-header",
      song,
      songIndex,``
      key: `song-header-${songIndex}`,
    });

    song.sections?.forEach((section, sectionIndex) => {
      items.push({
        type: "section",
        song,
        songIndex,
        section,
        sectionIndex,
        key: `section-${songIndex}-${sectionIndex}-${section.code}-${section.label}`,
      });
    });
  });

  return items;
}

function paginateFlowItems(
  items,
  measuredHeights,
  maxColumnHeightPx,
  columnGapPx,
) {
  const columns = [{ items: [], height: 0 }];

  items.forEach((item) => {
    let activeColumn = columns[columns.length - 1];
    const itemHeight = measuredHeights[item.key] ?? 0;

    if (itemHeight <= 0) {
      return;
    }

    const nextHeight =
      activeColumn.items.length === 0
        ? itemHeight
        : activeColumn.height + columnGapPx + itemHeight;

    const needsNewColumn =
      activeColumn.items.length > 0 &&
      nextHeight > maxColumnHeightPx - COLUMN_SAFETY_BUFFER_PX;

    if (needsNewColumn) {
      columns.push({ items: [], height: 0 });
      activeColumn = columns[columns.length - 1];
    }

    const appliedHeight =
      activeColumn.items.length === 0
        ? itemHeight
        : activeColumn.height + columnGapPx + itemHeight;

    activeColumn.items.push(item);
    activeColumn.height = appliedHeight;
  });

  const pages = [];

  for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 2) {
    pages.push({
      columns: [
        columns[columnIndex]?.items ?? [],
        columns[columnIndex + 1]?.items ?? [],
      ],
    });
  }

  return pages.length > 0 ? pages : [{ columns: [[], []] }];
}

function SongHeaderCard({ song, itemRef }) {
  return (
    <article className="song-header-card" ref={itemRef}>
      <header className="chart-top">
        <div>
          <h2 className="songTitle">{song.songTitle}</h2>
          <p>{song.artist}</p>
          <p className="setlist-rank">Setlist #{song.setlistOrder ?? "-"}</p>
        </div>

        <div className="chart-meta">
          <p>
            <span>Page:</span> {song.chartMeta?.page ?? "1/1"}
          </p>
          <p>
            <span>Key:</span> {song.chartMeta?.key ?? "N/A"}
          </p>
          <p>
            <span>Tempo:</span> {song.chartMeta?.tempo ?? "--"}
          </p>
          <p>
            <span>Time:</span> {song.chartMeta?.timeSignature ?? "--"}
          </p>
        </div>
      </header>

      <section className="order-row" aria-label="Song roadmap">
        {song.order?.map((item, index) => (
          <span key={`${song.songTitle}-${item}-${index}`}>{item}</span>
        ))}
      </section>

      <p className="section-total">{song.sections?.length ?? 0} sections</p>
    </article>
  );
}

function SectionCard({ section, index, itemRef }) {
  return (
    <article
      className="section-card"
      style={{ "--delay": `${index * 65}ms` }}
      ref={itemRef}
    >
      <header className="section-header">
        <span className="section-badge">{section.code}</span>
        <h3>{section.label}</h3>
      </header>

      <div className="section-chords" aria-label={`${section.label} chords`}>
        {section.chords?.map((line, lineIndex) => (
          <p key={`${section.code}-${lineIndex}`}>
            {line.map((chord, chordIndex) => (
              <span key={`${section.code}-${lineIndex}-${chordIndex}-${chord}`}>
                {chord}
              </span>
            ))}
          </p>
        ))}
      </div>
    </article>
  );
}

function App() {
  const flowItems = useMemo(() => {
    const orderedSongs = [...songArray].sort(
      (a, b) =>
        (a.setlistOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.setlistOrder ?? Number.MAX_SAFE_INTEGER),
    );

    return buildFlowItems(orderedSongs);
  }, []);
  const [pages, setPages] = useState([]);
  const [layoutVersion, setLayoutVersion] = useState(0);
  const measurementColumnsRef = useRef(null);
  const measurementColumnRef = useRef(null);
  const measuredItemRefs = useRef({});
  const paginationSignatureRef = useRef("");

  useEffect(() => {
    const handleResize = () => {
      setLayoutVersion((version) => version + 1);
    };

    window.addEventListener("resize", handleResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        setLayoutVersion((version) => version + 1);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const columnsElement = measurementColumnsRef.current;
    const columnElement = measurementColumnRef.current;

    if (!columnsElement || !columnElement) {
      return;
    }

    const maxColumnHeightPx = columnsElement.getBoundingClientRect().height;

    if (maxColumnHeightPx <= 0) {
      return;
    }

    const columnStyle = window.getComputedStyle(columnElement);
    const columnGapPx =
      Number.parseFloat(columnStyle.rowGap || columnStyle.gap || "0") || 0;

    const measuredHeights = {};
    let missingMeasurement = false;

    flowItems.forEach((item) => {
      const itemElement = measuredItemRefs.current[item.key];

      if (!itemElement) {
        missingMeasurement = true;
        return;
      }

      measuredHeights[item.key] = itemElement.getBoundingClientRect().height;
    });

    if (missingMeasurement) {
      return;
    }

    const nextPages = paginateFlowItems(
      flowItems,
      measuredHeights,
      maxColumnHeightPx,
      columnGapPx,
    );
    const signature = nextPages
      .map((page) =>
        page.columns
          .map((column) => column.map((item) => item.key).join(","))
          .join("|"),
      )
      .join("||");

    if (signature !== paginationSignatureRef.current) {
      paginationSignatureRef.current = signature;
      setPages(nextPages);
    }
  }, [flowItems, layoutVersion]);

  return (
    <main className="app-shell">
      <div className="measurement-layer" aria-hidden="true">
        <section className="paper-page measurement-page">
          <section className="song-columns" ref={measurementColumnsRef}>
            <section className="song-column" ref={measurementColumnRef}>
              {flowItems.map((item, itemIndex) => {
                if (item.type === "song-header") {
                  return (
                    <SongHeaderCard
                      key={`measure-${item.key}`}
                      song={item.song}
                      itemRef={(element) => {
                        measuredItemRefs.current[item.key] = element;
                      }}
                    />
                  );
                }

                return (
                  <SectionCard
                    key={`measure-${item.key}`}
                    section={item.section}
                    index={itemIndex}
                    itemRef={(element) => {
                      measuredItemRefs.current[item.key] = element;
                    }}
                  />
                );
              })}
            </section>
            <section className="song-column" />
          </section>
        </section>
      </div>

      {pages.map((page, pageIndex) => (
        <section
          className="paper-page"
          aria-label={`Printable chord chart page ${pageIndex + 1}`}
          key={`paper-page-${pageIndex}`}
        >
          <section
            className="song-columns"
            aria-label={`Two-column song layout page ${pageIndex + 1}`}
          >
            {page.columns.map((columnSegments, columnIndex) => (
              <section
                className="song-column"
                key={`page-${pageIndex}-column-${columnIndex}`}
                aria-label={`Page ${pageIndex + 1} column ${columnIndex + 1}`}
              >
                {columnSegments.map((item, itemIndex) => {
                  if (item.type === "song-header") {
                    return <SongHeaderCard key={item.key} song={item.song} />;
                  }

                  return (
                    <SectionCard
                      key={item.key}
                      section={item.section}
                      index={itemIndex}
                    />
                  );
                })}
              </section>
            ))}
          </section>
        </section>
      ))}
    </main>
  );
}

export default App;
