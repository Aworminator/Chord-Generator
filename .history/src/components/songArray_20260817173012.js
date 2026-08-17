export const songArray = [
  {
    songTitle: "Numb",
    artist: "Linkin Park",
    setlistOrder: 2,

    chartMeta: {
      page: "1/1",
      key: "Am",
      tempo: 110,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["Am", "F", "C", "G"], ["Am", "F", "C"], ["G"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Am", "F", "C", "G"],
          ["Am", "F", "C", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["F", "Am", "G"],
          ["Am", "C", "F"],
          ["F", "Am", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Am", "F", "C"],
          ["G", "Am"],
          ["F", "C"],
          ["G", "Am"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Am", "F", "C", "G"],
          ["Am", "F", "C", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["F", "Am", "G"],
          ["Am", "C", "F"],
          ["F", "Am", "G"],
          ["Am", "C", "F"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["F", "G"], ["Am", "Bm", "C", "E", "F"], ["G"], ["E"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["Am", "F", "C"],
          ["G", "Am"],
          ["F", "C"],
          ["G", "Am"],
        ],
      },
    ],
  },

  {
    songTitle: "Savior",
    artist: "Rise Against",
    setlistOrder: 1,

    chartMeta: {
      page: "1/1",
      key: "Fm",
      tempo: 94,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "I", "V2", "P", "C", "B", "I", "P", "C", "PC"],

    sections: [
      {
        code: "I",
        label: "INTRO / INSTRUMENTAL",
        chords: [["Fm", "Ab", "Db", "Ab", "Eb/G"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["Db"], ["Eb"], ["Db"], ["Eb Eb(Low)"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
          ["Fm", "Ab", "Db", "Ab", "Eb/G"],
        ],
      },
      {
        code: "I3",
        label: "INSTRUMENTAL",
        chords: [["Fm", "Db"], ["Fm", "B"], ["Fm", "B"], , ["Fm", "B"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Fm", "Eb", "Bb", "Db"],
          ["Fm", "Eb", "Bb", "Db"],
          ["Db", "Bb", "Eb", "C", "F"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["Don't play for 2 Measures"],
          ["Db", "Ab", "Fm"],
          ["C", "Db"],
          ["Ab", "Eb"],
        ],
      },
    ],
  },
  {
    songTitle: "Tonight, Tonight",
    artist: "Hot Chelle Rae",
    setlistOrder: 3,

    chartMeta: {
      page: "1/1",
      key: "E",
      tempo: 100,
      timeSignature: "4/4",
    },

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["E", "G#m", "A"],
          ["B", "B", "E"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "G#m", "A"],
          ["B", "B", "E"],
        ],
      },
      {
        code: "V2",
        label: "VERSE 2",
        chords: [["Don't Play"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["Palm Mute Notes"], ["E", "G#m", "A"], ["B", "B", "E"]],
      },
    ],
  },

  {
    songTitle: "What's My Age Again?",
    artist: "blink-182",
    setlistOrder: 5,

    chartMeta: {
      page: "1/1",
      key: "F#",
      tempo: 158,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["B", "F#", "C#", "D#m"],
          ["B", "F#", "C#", "D#m"],
          ["B", "F#", "C#", "D#m"],
          ["B", "F#"],
          ["C#", "D#m"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["B", "F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m"],
          ["B", "F#", "C#"],
          ["B", "F#", "C#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D#m", "B", "F#", "C#"],
          ["D#m", "B", "F#", "C#"],
          ["D#m", "B"],
          ["F#", "C#"],
          ["D#m"],
          ["C#", "B"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["B", "F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m"],
          ["B", "F#", "C#"],
          ["B", "F#", "C#"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["D#m", "C#", "B", "C#"],
          ["D#m", "C#", "B", "C#"],
          ["D#m", "C#", "B", "C#"],
          ["D#m", "C#"],
          ["B", "C#", "F#", "C#"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m", "B"],
          ["F#", "C#", "D#m"],
          ["C#", "B"],
        ],
      },
    ],
  },
  {
    songTitle: "The Anthem",
    artist: "Good Charlotte",
    setlistOrder: 6,

    chartMeta: {
      page: "1/1",
      key: "C",
      tempo: 130,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "B", "S", "I2", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["C", "G", "F", "G"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["C", "G", "C", "F"],
          ["C", "G", "F"],
          ["C", "G", "C", "F"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Am", "F", "C"],
          ["Am", "F", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "G", "F", "G"],
          ["C", "G", "F", "Ab", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["C", "G", "C", "F"],
          ["C", "G", "F"],
          ["C", "G", "C", "F"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Am", "G", "F", "G"],
          ["Am", "C", "G"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["C", "G", "C", "F"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [["Don't Play"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G", "C"],
        ],
      },
    ],
  },
  {
    songTitle: "Helena",
    artist: "My Chemical Romance",
    setlistOrder: 7,

    chartMeta: {
      page: "1/1",
      key: "C#m",
      tempo: 124,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "B", "C", "O"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["C#m", "E", "B", "G#m", "A"],
          ["C#m", "B"],
          ["G#m", "A"],
          ["C#m", "B"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["G#m", "A"],
          ["C#m", "Eb"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["E"], ["B", "Cdim", "C#m"], ["Cdim"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["C#m"], ["E", "B", "G#m", "A"]],
      },
      {
        code: "P",
        label: "PRE-CHORUS 2",
        chords: [
          ["G#m", "A"],
          ["C#m", "Eb"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["A", "B"],
          ["C#m", "A", "B", "B"],
          ["C#m", "A", "B", "B"],
          ["C#m", "A", "B", "B"],
          ["C#m", "A", "B", "B"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["C#m"]],
      },
    ],
  },
  {
    songTitle: "Love Drunk",
    artist: "Boys Like Girls",
    setlistOrder: 8,

    chartMeta: {
      page: "1/1",
      key: "D#",
      tempo: 145,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "C2", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["D#", "A#", "G#"],
          ["D#", "A#", "G#", "A#"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["D#", "G#"],
          ["F", "G#", "A#"],
          ["D#", "G#"],
          ["F", "A#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "G#", "D#", "A#"],
          ["C", "G#", "D#", "A#"],
          ["G#", "A#", "C", "A#"],
          ["C", "G#", "D#", "A#"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["D#", "G#"],
          ["F", "G#", "A#"],
          ["D#", "G#"],
          ["F", "A#"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["G#", "D# (low)", "A#"],
          ["G#", "D# (low)", "A#", "G#"],
        ],
      },

      {
        code: "C2",
        label: "FINAL CHORUS",
        chords: [
          ["D", "A#", "F", "C"],
          ["D", "A#", "F", "C"],
          ["A#", "C", "D", "C"],
          ["D", "A#", "F", "C"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["F", "C", "A#", "C"],
          ["F", "C", "A#", "C"],
          ["F", "C", "A#", "C"],
          ["F", "C", "A#", "C", "F"],
        ],
      },
    ],
  },
  {
    songTitle: "School of Rock",
    artist: "School of Rock",
    setlistOrder: 9,

    chartMeta: {
      page: "1/1",
      key: "D",
      tempo: 128,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "S1", "V2", "C", "B", "V3", "S2", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["D", "D", "D", "D"],
          ["D", "C", "B", "C"],
          ["D", "C", "B", "C"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["D", "C", "B", "C"],
          ["D", "C", "B", "C"],
          ["D", "C", "B", "C"],
          ["G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D", "E", "G", "D"],
          ["D", "E", "G"],
        ],
      },

      {
        code: "S1",
        label: "SOLO",
        chords: [
          ["D", "C", "B", "C"],
          ["D", "C", "B", "C"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["D", "C", "B", "C"], ["D", "C", "B", "C"], ["D", "C"], ["G"]],
      },
      {
        code: "C2",
        label: "CHORUS 2",
        chords: [
          ["D", "E", "G", "D"],
          ["D", "E", "G", "D"],
          ["D", "E", "G", "D"],
          ["D", "E", "G"],
        ],
      },

      {
        code: "IN",
        label: "INSTRUMENTAL",
        chords: [["D on 1/4th Notes"]],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["D", "C", "B", "C"],
          ["D", "C", "B", "C"],
        ],
      },

      {
        code: "S2",
        label: "SOLO",
        chords: [
          ["D", "C", "B", "C", "D"],
          ["D", "C", "B", "C", "D"],
          ["D", "C", "B", "C", "D"],
          ["D", "C", "G"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["D", "C", "G"]],
      },
    ],
  },
  {
    songTitle: "Welcome to the Black Parade",
    artist: "My Chemical Romance",
    setlistOrder: 10,

    chartMeta: {
      page: "1/1",
      key: "G",
      tempo: 96,
      timeSignature: "4/4",
    },

    order: [
      "I",
      "V1",
      "V2",
      "V3",
      "V4",
      "I2",
      "V5",
      "V6",
      "I3",
      "V7",
      "C",
      "V8",
      "C",
      "B1",
      "B2",
      "S",
      "C2",
      "O",
    ],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [["G", "F#m", "E", "D"], ["C", "B", "A", "D"], ["G"]],
      },

      {
        code: "I",
        label: "INTERLUDE",
        chords: [
          ["G", "F#m", "E", "D"],
          ["C", "D"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["G", "F#m", "E", "C"],
          ["C", "G", "D"],
          ["G", "F#m", "E", "C"],
          ["C", "G", "D"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["G", "F#m", "E", "D"],
          ["C", "D"],
          ["G", "F#m", "E", "D"],
          ["C", "D"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["G", "F#m", "E", "C"],
          ["C", "G", "D"],
          ["G", "F#m", "E", "C"],
          ["C", "G", "D"],
        ],
      },

      {
        code: "B1",
        label: "BRIDGE 1",
        chords: [["B", "Em"], ["B", "Em"], ["C"], ["D#", "D", "Cm", "Bb"]],
      },

      {
        code: "B2",
        label: "BRIDGE 2",
        chords: [
          ["G", "D/F#", "Em", "D", "C"],
          ["G", "C", "D"],
          ["G", "D/F#", "Em", "D", "C"],
          ["G", "C", "D"],
        ],
      },
      {
        code: "B3",
        label: "BRIDGE 3 - Key Change",
        chords: [
          ["A", "G#m", "F#m", "E"],
          ["D", "A"],
          ["E", "E (high oct)"],
        ],
      },
      {
        code: "C3",
        label: "LAST CHORUS - Key Change",
        chords: [
          ["A", "G#m", "F#m", "E"],
          ["D", "E"],
          ["A", "G#m", "F#m", "E"],
          ["D", "E"],
        ],
      },

      {
        code: "O/B",
        label: "OUTRO / BRIDGE",
        chords: [
          ["A", "G#m", "F#m", "E"],
          ["D", "E (Low)"],
          ["A", "G#m", "F#m", "E"],
          ["D", "E (Low)"],
          ["A"],
        ],
      },
    ],
  },
  {
    songTitle: "Starstruck",
    artist: "30H3!",
    setlistOrder: 9,

    chartMeta: {
      page: "1/1",
      key: "Dm",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["V1", "P", "C", "V2", "P", "C", "C"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Dm", "Am", "C", "G"],
          ["Dm", "Am", "C", "G"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Dm", "Am", "C", "G"],
          ["Dm", "Am", "C", "G", "Dm"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Dm", "Am", "C", "G"],
          ["Dm", "Am", "C", "G"],
        ],
      },
      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb", "C"],
          ["Dm", "C", "Bb"],
        ],
      },
    ],
  },
  {
    songTitle: "Fat Lip",
    artist: "Sum 41",
    setlistOrder: 10,

    chartMeta: {
      page: "1/1",
      key: "A",
      tempo: 133,
      timeSignature: "4/4",
    },

    order: [
      "I",
      "V1",
      "P",
      "C",
      "PV",
      "V2",
      "P",
      "C",
      "I2",
      "V3",
      "P",
      "C",
      "O",
    ],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E", "A"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["E", "B", "A"],
          ["A", "G#m", "F#m"],
          ["E", "B", "A"],
          ["A", "G#m", "F#m"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["E"], ["C#", "A"], ["E"], ["C#", "A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "B", "C#"],
          ["G#", "A", "G#", "A"],
          ["E", "B", "C#"],
          ["G#", "A", "G#", "A"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [
          ["E", "B", "C#", "A"],
          ["E", "B", "C#", "A"],
          ["E", "B", "C#", "A"],
          ["E", "B", "C#", "A", "D"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E"],
          ["D", "E", "D", "E", "A"],
          ["D", "E", "D", "E", "A"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["D", "E", "A", "D", "E", "D", "E", "A", "D", "E"],
          ["D", "E", "A", "D", "E", "D", "E", "A"],
        ],
      },
    ],
  },

  {
    songTitle: "Holiday",
    artist: "Green Day",
    setlistOrder: 11,

    chartMeta: {
      page: "1/1",
      key: "Fm",
      tempo: 147,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "I2", "V2", "C", "B1", "S", "B2", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "Eb"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
          ["Fm", "Db", "Ab", "Eb", "C"],
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
          ["Fm", "Db", "Ab", "Eb", "C"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [["Don't Play"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
          ["Fm", "Db", "Ab", "Eb", "C"],
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
          ["Fm", "Db", "Ab", "Eb", "C"],
        ],
      },

      {
        code: "B1",
        label: "BRIDGE",
        chords: [
          ["Fm", "Ab", "Db", "Bb", "Eb", "C"],
          ["Fm", "Ab", "Eb", "C", "Fm (Hi)"],
          ["Fm", "Ab", "Db", "Bb", "Eb", "C"],
          ["Fm", "Ab", "Eb", "C", "Fm (Hi)"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["Db", "Ab", "C", "Fm", "Eb"],
          ["Db", "Ab", "C"],
        ],
      },
      {
        code: "IN",
        label: "INTERLUDE",
        chords: [
          ["Play Muted"],
          ["Fm", "Ab", "Db", "Bb", "Eb", "C"],
          ["Fm", "Ab", "Eb", "C", "Fm (Hi)"],
          ["Fm", "Ab", "Db", "Bb", "Eb", "C"],
          ["Fm", "Ab", "Eb", "C", "Fm (Hi)"],
          ["C"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "C"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "Eb"],
          ["Eb", "C", "Fm (Hi)", "Fm"],
        ],
      },
    ],
  },
  {
    songTitle: "American Idiot",
    artist: "Green Day",
    setlistOrder: 1,

    chartMeta: {
      page: "1/1",
      key: "G#",
      tempo: 186,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "B", "V2", "C", "B", "S", "B2", "V3", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#"],
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#"],
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["C#"], ["G#", "D#"], ["G#"], ["C#"], ["G#", "D#"]],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["C#", "G#", "D#", "G#"],
          ["C#", "G#", "D#"],
        ],
      },

      {
        code: "B2",
        label: "BRIDGE",
        chords: [["Don't Play"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#", "F#"],
          ["G#", "C#", "F#", "C#", "G#"],
        ],
      },
    ],
  },
  {
    songTitle: "Check Yes Juliet",
    artist: "We the Kings",
    setlistOrder: 13,

    chartMeta: {
      page: "1/1",
      key: "D",
      tempo: 148,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "I2", "B", "C", "O", "F"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["D", "Bm", "G"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [["D"], ["Bm", "G"]],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["D"], ["Bm"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Bm", "D", "G", "A"],
          ["Bm", "D", "G", "A"],
          ["Bm", "D", "G", "A"],
        ],
      },
      {
        code: "I",
        label: "INTRO",
        chords: [["D"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["D"], ["Bm", "G"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["G", "Em", "D"],
          ["A", "Bm", "A"],
          ["G", "Em", "D"],
          ["A", "Bm", "A"],
        ],
      },
      {
        code: "I",
        label: "INTRO",
        chords: [["D"], ["Bm", "G"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["D"]],
      },
    ],
  },
  {
    songTitle: "Swing, Swing",
    artist: "The All-American Rejects",
    setlistOrder: 14,

    chartMeta: {
      page: "1/1",
      key: "G",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "S", "B", "C", "O", "F"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["G", "D", "Em", "C"],
          ["G", "D", "Em", "C"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["G", "G", "Em", "C"],
          ["G", "G", "Em", "C"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["G", "G", "Em", "C"],
          ["G", "G", "Em", "C"],
          ["Bm", "C", "C"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["G", "D", "Em", "C"],
          ["G", "D", "Em", "C", "G"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["G", "Em", "C"],
          ["G", "G", "Em", "C"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["G", "D", "Em", "C"],
          ["G", "D", "Em", "C", "G"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Em", "D", "Pause"],
          ["Em", "D", "C", "C"],
        ],
      },
    ],
  },
  {
    songTitle: "Lifestyle of the Rich and Famous",
    artist: "Good Charlotte",
    setlistOrder: 15,

    chartMeta: {
      page: "1/1",
      key: "C#",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["V", "P", "C", "B"],

    sections: [
      {
        code: "V",
        label: "VERSE",
        chords: [
          ["C#", "D#", "F#", "C#"],
          ["C#", "D#", "F#", "C#"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["A#m", "F#", "C#", "G#"],
          ["A#m", "F#", "C#", "G#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#", "D#", "F#", "C#"],
          ["C#", "D#", "F#", "C#"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["C# 1/8th Notes Whole Time"]],
      },
      {
        code: "C",
        label: "CHORUS LAST",
        chords: [
          ["C#", "D#", "F#", "C#"],
          ["C#", "D#", "F#", "C#"],
          ["G#", "D#", "G#", "C#"],
          ["G#", "C#"],
        ],
      },
    ],
  },
  {
    songTitle: "Jamie All Over",
    artist: "Mayday Parade",
    setlistOrder: 16,

    chartMeta: {
      page: "1/1",
      key: "Db",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["V", "P", "C", "B"],

    sections: [
      {
        code: "V",
        label: "VERSE",
        chords: [
          ["Don't Play", "Gb"],
          ["Db", "Ab", "Gb"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Bbm", "C", "Db", "Gb"],
          ["Bbm", "C", "Db", "Gb"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Db", "Gb"],
          ["Bbm", "Ab", "Gb"],
          ["Db", "Gb"],
          ["Bbm", "Ab", "Gb"],
        ],
      },
      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Pause", "Ab", "Gb"],
          ["Db", "Ab", "Gb"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE / TURNAROUND",
        chords: [
          ["Bbm", "C", "Gb"],
          ["Bbm", "C", "Gb", "Ab"],
        ],
      },
    ],
  },

  {
    songTitle: "Gives You Hell",
    artist: "The All-American Rejects",
    setlistOrder: 17,

    chartMeta: {
      page: "1/1",
      key: "E",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["V", "P", "C"],

    sections: [
      {
        code: "V",
        label: "VERSE",
        chords: [
          ["A", "G#m", "F#m"],
          ["A", "G#m", "F#m"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["B", "C#m"],
          ["B", "A7"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "C#m", "A"],
          ["E", "C#m", "A"],
          ["E", "C#m", "A"],
          ["E", "B", "A"],
          ["G#m"],
        ],
      },
      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["E", "C#m", "A"],
          ["E", "C#m", "A"],
        ],
      },
      {
        code: "B",
        label: "Bridge",
        chords: [
          ["C#m", "A", "E"],
          ["G#m", "F#m", "E"],
          ["C#m", "C#m (hi)", "A", "B"],
        ],
      },
      {
        code: "D",
        label: "DROP",
        chords: [
          ["Muted"],
          ["E", "A", "C#m", "B", "E"],
          ["E", "A", "C#m", "B", "E"],
        ],
      },
      {
        code: "C",
        label: "CHORUS LAST",
        chords: [
          ["E", "A", "C#m", "B", "E"],
          ["E", "A", "C#m", "B", "E"],
        ],
      },
    ],
  },
  {
    songTitle: "If It Means a Lot to You",
    artist: "A Day to Remember",
    setlistOrder: 18,

    chartMeta: {
      page: "1/1",
      key: "Eb",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["P", "C", "B"],

    sections: [
      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["Eb", "Bb", "Gm", "F"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Eb", "F", "Gm", "Bb"],
          ["Eb", "F", "Gm", "Bb"],
        ],
      },
    ],
  },
  {
    songTitle: "Dirty Little Secret",
    artist: "The All-American Rejects",
    setlistOrder: 19,

    chartMeta: {
      page: "1/1",
      key: "A",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "S", "C"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["A", "A", "G", "A"],
          ["G", "A", "G"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Don't Play"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["B", "F#m", "D", "E"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["A", "D"], ["F#m", "E"], ["A", "D"], ["F#m", "E"], ["D"]],
      },
      {
        code: "V2",
        label: "VERSE 2",
        chords: [["1/8th notes finger"], ["A", "E", "F#m (hi)", "D"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["F#m"], ["D"], ["F#m"], ["D"], ["C#"], ["B"]],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["A", "G", "A", "G"],
          ["A", "G", "A", "G"],
        ],
      },
      {
        code: "C",
        label: "CHORUS LAST",
        chords: [
          ["A", "D", "F#m", "E"],
          ["A", "D", "F#m", "E"],
          ["D", "E", "F#m (Hi)", "G (hi)"],
        ],
      },
    ],
  },
];
