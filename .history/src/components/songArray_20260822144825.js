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

    order: ["I", "V1", "C", "P", "C", "B"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["FMaj7", "FMaj7", "C", "G"],
          ["FMaj7", "FMaj7", "C", "G"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Am", "C", "G"],
          ["Am", "C", "G"],
          ["Am", "C", "G"],
          ["Am", "F", "C", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["F", "G", "Am"], ["G"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["C", "G", "Am", "F"], ["C", "G", "Am", "F"], ["C - G"]],
      },

      {
        code: "T",
        label: "TURNAROUND",
        chords: [["FMaj7", "FMaj7", "C", "G"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Am", "C", "G"],
          ["Am", "C", "G"],
          ["Am", "C", "G"],
          ["Am", "F", "C", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["F", "G", "Am", "C"],
          ["F", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["C", "G", "Am", "F"], ["C", "G", "Am", "F"], ["C - G"]],
      },
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
        chords: [["A", "D", "F#m", "E"], ["A", "D", "F#m", "E"], ["D"]],
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
          ["D", "E", "F#m (Hi)", "G (Hi)"],
        ],
      },
      {
        code: "O",
        label: "OUTRO",
        chords: [["Pause"], ["A", "G", "F#m"]],
      },
    ],
  },
  {
    songTitle: "My Friends Over You",
    artist: "New Found Glory",
    setlistOrder: 20,

    chartMeta: {
      page: "1/1",
      key: "D",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "PC", "V2", "P", "C", "B", "BR", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["D", "G", "D"], ["G"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["D", "G"],
          ["D", "Em", "G"],
          ["D", "G"],
          ["D", "Em", "G"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["Em", "G"], ["Em", "G"], ["A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D", "G"],
          ["D", "G"],
          ["Bm", "G"],
          ["Bm"],
          ["(Lo D) 5 4 2 D A"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["G", "D"],
          ["G", "D"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["D", "G"],
          ["D", "Em", "G"],
          ["D", "G"],
          ["D", "Em", "G"],
        ],
      },
      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [["Em", "G"], ["Em", "G"], ["A"]],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D", "G"],
          ["D", "G"],
          ["Bm", "G"],
          ["Bm"],
          ["(Lo D) 5 4 2 D A"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Pause, Mimick Guitar Riff"],
          ["D", "F#", "G"],
          ["D", "F#", "G"],
          ["B", "F#", "G"],
          ["B", "A", "G"],
        ],
      },

      {
        code: "BR",
        label: "BREAK",
        chords: [["Em"], ["Pause"], ["A"]],
      },
      {
        code: "C",
        label: "CHORUS x2",
        chords: [
          ["D", "G"],
          ["D", "G"],
          ["Bm", "G"],
          ["Bm"],
          ["(Lo D) 5 4 2 D A"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["D", "G"],
          ["D", "G"],
        ],
      },
    ],
  },
  {
    songTitle: "Here (In Your Arms)",
    artist: "Hellogoodbye",
    setlistOrder: 21,

    chartMeta: {
      page: "1/1",
      key: "E",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: ["V1", "V2", "V3", "C"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["E", "B", "C#m", "A"],
          ["E", "B", "C#m", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E (Hi)", "B", "C#m", "A"],
          ["E (Hi)", "B", "C#m", "A"],
        ],
      },
    ],
  },
  {
    songTitle: "Sugar, We're Goin Down",
    artist: "Fall Out Boy",
    setlistOrder: 22,

    chartMeta: {
      page: "1/1",
      key: "D",
      tempo: 124,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "PV", "V2", "P", "C", "B", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["F#", "G", "A", "B"],
          ["C", "B", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
        ],
      },

      {
        code: "PV",
        label: "PRE-VERSE",
        chords: [["F#", "G", "A", "B", "C", "B", "G"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
        ],
      },
      {
        code: "PV",
        label: "PRE-VERSE",
        chords: [["F#", "G", "A", "B", "C", "B", "G"]],
      },

      {
        code: "C",
        label: "CHORUS 2",
        chords: [
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["D", "G", "B", "G"],
          ["Chug E", "Open D"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["D", "G", "B", "G"], ["D", "G", "B", "G"], ["G"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["Em", "D"]],
      },
    ],
  },

  {
    songTitle: "Somebody Told Me",
    artist: "The Killers",
    setlistOrder: 23,

    chartMeta: {
      page: "1/1",
      key: "A",
      tempo: 138,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "B", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["A"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["A"],
          ["D (Lo)", "D (Hi)", "E", "F"],
          ["A A"],
          ["D (Lo)", "D (Hi)", "E", "F"],
          ["A"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["F", "G"],
          ["A", "A"],
          ["F", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["A", "F", "G", "E"],
          ["A", "F", "G"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["A"],
          ["D (Lo)", "D (Hi)", "E", "F"],
          ["A A"],
          ["D (Lo)", "D (Hi)", "E", "F"],
          ["A"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["F", "G"],
          ["A", "A"],
          ["F", "G"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["A", "F", "G", "E"],
          ["A", "F", "G"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["f", "g"],
          ["D", "D (Lo)"],
          ["C", "D", "f"],
          ["a", "g", "f"],
          ["f", "e", "g"],
        ],
      },
    ],
  },

  {
    songTitle: "The Rock Show",
    artist: "blink-182",
    setlistOrder: 24,

    chartMeta: {
      page: "1/1",
      key: "Ab",
      tempo: 180,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "PV", "V2", "C", "PV", "V3", "C", "B", "C", "O", "F"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["Ab", "Db", "Eb", "Ab", "Db", "Eb"], ["Ab"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Ab"], ["Db", "Eb"], ["Ab"], ["Db", "Eb", "Ab"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Ab", "Fm", "Db"],
          ["Ab", "Fm", "Db"],
          ["Ab", "Fm", "Db"],
          ["Eb", "Db"],
          ["Eb", "Db"],
          ["Eb", "Db"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [["Ab"], ["Db", "Eb"], ["Ab"], ["Db", "Eb"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Fm", "Db", "Ab", "Eb"],
          ["Fm", "Db", "Ab", "Eb"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Ab", "Fm", "Db"],
          ["Ab", "Fm", "Db"],
          ["Ab", "Fm", "Db"],
          ["Eb", "Db"],
          ["Eb", "Db"],
          ["Eb", "Db"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["Ab", "Db", "Eb"],
          ["Ab", "Db", "Eb"],
          ["Ab", "Db", "Eb"],
          ["Ab", "Db", "Eb"],
        ],
      },
    ],
  },

  {
    songTitle: "CrushCrushCrush",
    artist: "Paramore (Use Pitch Pedal for Low C#m)",
    setlistOrder: 25,

    chartMeta: {
      page: "1/1",
      key: "C#m",
      tempo: 120,
      timeSignature: "4/4",
    },

    order: [
      "I",
      "V1",
      "P",
      "B",
      "C",
      "B2",
      "V2",
      "P",
      "B",
      "C",
      "B3",
      "C",
      "O",
    ],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["C"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["C#m", "E", "B", "C#m"],
          ["C#m", "E", "B"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Stacato"],
          ["A", "B", "C#m"],
          ["6 7 6 4 2"],
          ["A", "B", "C#m"],
          ["2 4 2 4 2"],
        ],
      },

      {
        code: "IN",
        label: "INSTRUMETNAL",
        chords: [["Asus2", "G#", "C#m"], ["C#m"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "E", "B"],
          ["A", "C#m", "B"],
          ["C#m", "E", "B"],
          ["A", "B"],
        ],
      },

      {
        code: "B2",
        label: "BRIDGE",
        chords: [["C#m", "B", "C#m", "B", "Ab/C"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["C#m", "E", "B", "C#m"],
          ["C#m", "E", "B"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Stacato"],
          ["A", "B", "C#m"],
          ["6 7 6 4 2"],
          ["A", "B", "C#m"],
          ["2 4 2 4 2"],
        ],
      },

      {
        code: "IN",
        label: "INSTRUMETNAL",
        chords: [["Asus2", "G#", "C#m"], ["C#m"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "E", "B"],
          ["A", "C#m", "B"],
          ["C#m", "E", "B"],
          ["A", "B"],
        ],
      },

      {
        code: "B3",
        label: "BRIDGE",
        chords: [["Pause"], ["C#m", "E", "B", "A"], ["C#m", "E", "B", "A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "E", "B"],
          ["A", "C#m", "B", "C"],
          ["C#m", "E", "B"],
          ["A", "B"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["C#m", "C", "B", "Bb"],
          ["A", "A", "B", "C", "C#m"],
        ],
      },
    ],
  },

  {
    songTitle: "Bring Me to Life",
    artist: "Evanescence",
    setlistOrder: 26,

    chartMeta: {
      page: "1/1",
      key: "Em",
      tempo: 95,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "V2", "C", "V3", "C", "B", "I2", "V4", "C", "B"],

    sections: [
      {
        code: "V2",
        label: "VERSE 2",
        chords: [["E", "e", "E", "e"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["OCTAVES"],
          ["E"],
          ["G"],
          ["D", "E"],
          ["E"],
          ["G"],
          ["D", "E"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [["SLAP HARD"], ["E"], ["E"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["C", "D", "E"], ["C/G", "D/A", "E"], ["2 4 5 9"]],
      },

      {
        code: "I2",
        label: "INTERLUDE I GAVE UP / HERE FIX IT!",
        chords: [
          ["Am", "Amadd9", "G"],
          ["F#", "F#madd11"],
          ["Am", "Amadd9", "G", "B/F#"],
        ],
      },

      {
        code: "V4",
        label: "VERSE 4",
        chords: [["Em"], ["C/E"], ["E"], ["C/E"]],
      },
    ],
  },

  {
    songTitle: "In the End",
    artist: "Linkin Park",
    setlistOrder: 27,

    chartMeta: {
      page: "1/1",
      key: "Fm",
      tempo: 105,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "C", "O"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "Fm"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Fm", "G#"],
          ["D#", "C#"],
          ["Fm", "G#"],
          ["D#", "C#"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "Fm"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "D#", "C#", "D#"],
          ["Fm", "G#", "D#", "C#"],
          ["Fm", "G#", "D#", "C#"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["Fm", "D#", "C#", "D#"], ["Fm", "D#", "C#", "D#"], ["Fm"]],
      },
    ],
  },

  {
    songTitle: "That's What You Get",
    artist: "Paramore",
    setlistOrder: 28,

    chartMeta: {
      page: "1/1",
      key: "Ab",
      tempo: 150,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "B1", "V2", "C", "B2", "V3", "C", "I2", "B3", "C"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["Ab", "Bb", "Cm", "G"],
          ["Ab", "Bb", "Cm", "G"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm"],
        ],
      },

      {
        code: "B1",
        label: "BRIDGE",
        chords: [["Ab", "Bb", "Cm"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm", "Eb"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Ab", "Eb", "Cm", "Bb"],
          ["Ab", "Eb", "Bb"],
          ["Cm", "Bb", "Cm", "Bb"],
          ["Ab", "Eb", "Bb"],
        ],
      },

      {
        code: "B2",
        label: "BRIDGE",
        chords: [["Ab", "Bb", "Cm", "Gm/F", "Ab"], ["Bb"]],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm", "Eb"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Ab", "Eb", "Cm", "Bb"],
          ["Ab", "Eb", "Bb"],
          ["Cm", "Bb", "Cm", "Bb"],
          ["Ab", "Eb", "Bb"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm"],
          ["Ab", "Bb", "Cm"],
        ],
      },

      {
        code: "B3",
        label: "BRIDGE",
        chords: [
          ["Ab", "Bb", "Cm", "Gm"],
          ["Ab", "Bb", "Cm", "Gm"],
        ],
      },
    ],
  },

  {
    songTitle: "Mr. Brightside",
    artist: "The Killers",
    setlistOrder: 29,

    chartMeta: {
      page: "1/1",
      key: "C",
      tempo: 148,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "B", "V2", "P", "C", "B", "O"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["C", "G/B", "F"],
          ["C", "G/B", "F"],
          ["C", "G/B", "F"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Am", "G", "F"],
          ["Am", "G", "F"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["C", "G/B", "F"],
          ["C", "G/B", "F"],
          ["C", "G/B", "F"],
        ],
      },
      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Am", "G", "F"],
          ["Am", "G", "F"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["c", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
          ["C", "F", "Am", "G"],
        ],
      },
    ],
  },
  {
    songTitle: "In Too Deep",
    artist: "Sum 41",
    setlistOrder: 0,

    chartMeta: {
      page: "1/1",
      key: "E",
    },

    order: [
      "I",
      "V1",
      "B1",
      "C",
      "BR",
      "V2",
      "B2",
      "C",
      "S",
      "INT",
      "PC",
      "C",
      "O",
      "E",
    ],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["a", "e", "a", "e"],
          ["b", "d", "e"],
        ],
      },

      {
        code: "B1",
        label: "BRIDGE",
        chords: [["7 9 11 14 0"], ["0 2 4 7"], ["9 11 9 7 9"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "G#m", "A"],
          ["E", "G#m", "A"],
          ["E", "G#m", "A"],
          ["E", "A", "e", "D"],
          ["A"],
        ],
      },

      {
        code: "BR",
        label: "BREAK",
        chords: [
          ["E", "e", "A", "G#m", "A"],
          ["E", "e", "A", "G#m"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["E", "G#m", "A"],
          ["A", "E"],
          ["G#m", "A", "G#m", "A"],
          ["E", "G#m", "A"],
          ["A", "E"],
          ["G#m", "A", "G#m", "A"],
        ],
      },

      {
        code: "B2",
        label: "BRIDGE",
        chords: [
          ["E", "A"],
          ["e", "a"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "G#m", "A"],
          ["E", "G#m", "A"],
          ["E", "G#m", "A"],
          ["E", "A"],
          ["e", "D", "A"],
          ["e", "D", "A"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["E", "F#m", "D", "A"],
          ["E", "F#m", "D", "A"],
        ],
      },

      {
        code: "INT",
        label: "INTERLUDE",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["E", "D", "A", "C"],
          ["E", "D", "A", "C"],
          ["E", "D", "A", "C", "E", "D", "A", "C"],
        ],
      },

      {
        code: "E",
        label: "ENDING",
        chords: [["E", "D", "A", "C"], ["E", "D", "A", "C"], ["E"]],
      },
    ],
  },
  {
    songTitle: "Year 3000",
    artist: "Jonas Brothers",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["B", "F#", "E"],
          ["B", "F#", "E"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["B", "F#", "E", "E", "F#"],
          ["B", "F#", "E", "E", "F#"],
          ["B", "F#", "E", "E", "F#"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["G#m", "F#", "E"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["Pause"], ["Walk down f#m e"], ["B", "F#", "E", "E", "F#"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["G#m", "F#", "E"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["Pause"], ["B", "F#", "E", "E", "F#"], ["B", "F#", "E"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["G#m", "F#", "E"]],
      },

      {
        code: "BD",
        label: "BREAKDOWN",
        chords: [["Don't play until build"], ["E"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
          ["B", "F#", "E", "E"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["Don't Play"]],
      },
    ],
  },
  {
    songTitle: "1985",
    artist: "Bowling for Soup",
    setlistOrder: 0,

    chartMeta: {
      page: "1/1",
      key: "B",
    },

    order: ["I", "V1", "C", "PC", "V2", "C", "S", "B", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "E", "Ab", "A"],
          ["B", "E", "Ab", "A"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [["B", "E", "Ab", "F#"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
          ["B", "E", "Ab", "F#"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "E", "Ab", "A"],
          ["B", "E", "Ab", "A"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [["B", "E", "Ab", "F#"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["B", "E", "G#", "F#"],
          ["B", "E", "G#", "F#"],
        ],
      },

      {
        code: "O",
        label: "CHORUS / OUTRO",
        chords: [
          ["B", "E", "Ab", "A"],
          ["B", "E", "Ab", "A"],
        ],
      },
    ],
  },
  {
    songTitle: "Umbrella",
    artist: "Rihanna",
    setlistOrder: 0,

    chartMeta: {
      page: "1/1",
      key: "F#",
    },

    order: ["V1", "C", "PC", "V2", "C", "PC", "B", "C", "PC", "O"],

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["F#", "G#", "F", "A#m", "G#"],
          ["F#", "G#", "F"],
          ["Walk up A#m C", "C#", "F"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#", "G#", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["F#", "C#", "F", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["F#", "G#", "F", "A#m", "G#"],
          ["F#", "G#", "F"],
          ["Walk up A#m C", "C#", "F"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#", "G#", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
        ],
      },
      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["F#", "C#", "F", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["B", "F#", "C#", "G# - A#"],
          ["B", "F#", "F"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#", "G#", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["F#", "C#", "F", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
          ["F#", "C#", "F", "A#m", "G#"],
          ["F#", "C#", "F - f"],
          ["A#m"],
        ],
      },
    ],
  },
  {
    songTitle: "Teenage Dirtbag",
    artist: "Wheatus",
    setlistOrder: 0,

    chartMeta: {
      page: "1/1",
      key: "E",
    },

    order: [
      "I",
      "V1",
      "PC",
      "C",
      "PV",
      "V2",
      "PC",
      "C",
      "B",
      "V3",
      "PC",
      "C",
      "B",
      "O",
    ],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["C#m", "A", "B"],
          ["C#m", "A", "B"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m", "A - B"],
        ],
      },

      {
        code: "PV",
        label: "PRE-VERSE",
        chords: [
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
        ],
      },
      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["C#m", "A", "B"],
          ["C#m", "A", "B"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m"],
          ["E", "A", "B", "C#m", "G#m", "A - B"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["E", "A", "E", "A", "E", "A"],
          ["C#m", "G#m", "A", "B"],
          ["E", "A", "E", "A", "E", "A"],
          ["C#m", "G#m", "A", "B"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [["Don't Play"], ["Build E A B"], ["C#m", "G#m", "A", "B"]],
      },
      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["E", "A", "E", "A", "E", "A"],
          ["C#m", "G#m", "A", "B"],
          ["E", "A", "E", "A", "E", "A"],
          ["C#m", "G#m", "A", "B"],
        ],
      },

      {
        code: "E",
        label: "END",
        chords: [
          ["E", "B", "E", "A"],
          ["E", "B", "E", "A"],
          ["A", "G#m", "F#m - G#m - F#m", "E"],
        ],
      },
    ],
  },
  {
    songTitle: "Teenagers",
    artist: "My Chemical Romance",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Don't Play"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["E"], ["B", "A", "E", "B", "E"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["Don't Play"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["E"], ["B", "A", "E", "B", "E"]],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [["A", "E", "A", "B"]],
      },

      {
        code: "FC",
        label: "FINAL CHORUS",
        chords: [
          ["Pause"],
          ["E", "B", "A", "E", "B", "E"],
          ["E", "B", "A", "E", "B", "E"],
        ],
      },
    ],
  },
  {
    songTitle: "All I Wanted",
    artist: "Paramore",

    chartMeta: {
      key: "D",
    },

    sections: [
      {
        code: "I",
        label: "INTRO / VERSE",
        chords: [["D", "F#m", "Bm", "A/C#"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["D", "F#m", "Bm", "A/C#", "A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["D", "F#m", "Bm", "A/C#"]],
      },

      {
        code: "BO",
        label: "BRIDGE / OUTRO",
        chords: [["D", "F#m", "Bm", "A/C#"]],
      },
    ],
  },
  {
    songTitle: "Ocean Avenue",
    artist: "Yellowcard",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["Eb", "F", "Db"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Eb", "F", "Db"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Eb", "F", "Db"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "PV",
        label: "PRE-VERSE",
        chords: [["Eb", "F", "Db"]],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Eb", "F", "Db"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "INT",
        label: "INTERLUDE",
        chords: [["Pause"], ["Ab", "F", "Eb", "Db"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Ab", "F", "Eb", "Db"],
          ["Ab", "F", "Eb", "Db"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
          ["Eb", "F", "Db"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["Eb", "F", "Db"], ["Db"]],
      },
    ],
  },
  {
    songTitle: "Two Is Better Than One",
    artist: "Boys Like Girls",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Don't Play"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F", "G"],
          ["F", "G"],
          ["F", "G"],
          ["Am", "G", "F"],
          ["Am", "G", "C"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["C", "Am", "F", "G", "C"],
          ["C", "Am", "F", "G", "C"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F", "G"],
          ["F", "G"],
          ["F", "G"],
          ["Am", "G", "F"],
          ["Am", "G"],
        ],
      },

      {
        code: "INT",
        label: "INTERLUDE",
        chords: [["F - G", "Am", "G"], ["F - G", "Dm", "G"], ["C"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["Pause"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F", "G"],
          ["F", "G"],
          ["F", "G"],
          ["Am", "G", "F - G"],
          ["F", "G"],
          ["F", "G"],
          ["F", "G"],
          ["Am", "G", "F"],
          ["Am", "G"],
          ["C"],
        ],
      },
    ],
  },
  {
    songTitle: "Face Down",
    artist: "The Red Jumpsuit Apparatus",

    sections: [
      {
        code: "IV",
        label: "INTRO / VERSE",
        chords: [["Gm", "Eb", "Bb", "F"]],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [["Gm", "Eb", "Bb", "F"]],
      },
      {
        code: "B",
        label: "BRIDGE",
        chords: [["Gm", "Eb", "Bb", "F"]],
      },
    ],
  },
  {
    songTitle: "All the Small Things",
    artist: "blink-182",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["G - F"], ["C", "G", "x", "F"], ["C", "G", "x", "F"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["1/8 Notes"], ["C", "g", "f"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "G", "F"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "PV",
        label: "PRE-VERSE",
        chords: [
          ["C", "G", "x", "F"],
          ["C", "G", "x", "F"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
          ["C", "G", "F", "G"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["1/8 Notes"], ["C", "g", "f"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "G", "F"],
          ["C", "G", "F"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["C", "F", "G"],
          ["C", "F", "G"],
          ["C", "F", "G"],
          ["C", "F", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C", "G", "F"],
          ["C", "G", "F"],
          ["C", "G", "F"],
          ["C", "G", "F"],
          ["F", "F", "C"],
        ],
      },
    ],
  },
  {
    songTitle: "I'd Do Anything",
    artist: "Simple Plan",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["C#", "D#", "Ab"],
          ["C#", "D#", "Ab"],
          ["C#", "D#", "Ab"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Pause"],
          ["C#", "D#"],
          ["Ab", "G", "Fm"],
          ["C#", "D#"],
          ["Ab", "G", "Fm"],
          ["C#", "D#"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Bbm", "Cm", "C#", "D# -"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#"],
          ["Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Ab", "G", "Fm"],
          ["C#", "D#"],
          ["Ab", "G", "Fm"],
          ["C#", "D#"],
          ["Ab", "G", "Fm"],
          ["C#", "D#"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["Bbm", "Cm", "C#", "D#"],
          ["Bbm", "Cm", "D#"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#"],
          ["Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Pause"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#"],
          ["D#..."],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#"],
          ["x", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm"],
          ["C#", "Ab", "D#", "Fm", "C#"],
          ["C#", "D#", "Ab"],
        ],
      },
    ],
  },
  {
    songTitle: "Decode",
    artist: "Paramore",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Gb", "Eb", "Bb", "F"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },
      {
        code: "TN",
        label: "TURNAROUND",
        chords: [["Bb", "D# - Ab"], ["F"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["Gb", "Eb", "Bb", "F"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["Gb", "Eb", "Bb", "F"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Gb", "Eb", "Bb", "F"],
          ["Gb", "Eb", "Bb", "F"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["Gb", "Ab", "Eb", "Bb - G"],
          ["Gb", "Bb", "G"],
          ["Gb", "Ab", "Eb", "Bb - G"],
          ["Gb", "Bb", "G"],
          ["Gb", "Ab", "Eb", "Bb - G"],
          ["Gb", "Bb", "G"],
          ["Eb"],
        ],
      },
    ],
  },
  {
    songTitle: "I Write Sins Not Tragedies",
    artist: "Panic! At The Disco",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Don't Play"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["Pause"], ["f#", "f#", "f"], ["Am"], ["f#", "f#", "f"]],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["All 1/8th notes"], ["F", "d", "B"], ["F", "G", "D"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["F", "d", "B"], ["F", "G", "D"], ["F", "B", "C"], ["F"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am", "F", "D", "D - G"],
          ["Am"],
        ],
      },

      {
        code: "O",
        label: "Outro",
        chords: [
          ["F", "d", "B"],
          ["F", "G", "D"],
          ["F", "B", "C"],
          ["F", "G", "D"],
          ["F"],
        ],
      },
    ],
  },
  {
    songTitle: "My Own Worst Enemy",
    artist: "Lit",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["Pause"], ["E", "B", "A"], ["E", "B", "A"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["B - C#m - e"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["E", "B", "A"],
          ["E", "B", "A"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["B - C#m - e"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
          ["E", "B", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["B - C#m - e"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
          ["B - C#m - e"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["E", "B", "A"],
          ["E", "B", "A"],
        ],
      },
    ],
  },
  {
    songTitle: "MakeDamnSure",
    artist: "Taking Back Sunday",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Don't Play"],
          ["G#m-F#", "A#m", "C#"],
          ["D#m", "B"],
          ["F#", "A#m", "F5", "D#m", "G#m"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["1/8th note Staccato"], ["B", "A#", "C#"], ["B", "A#", "C#"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#"],
          ["A#", "B"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["F#", "A#m", "C#", "D#m", "B"],
          ["F#", "A#m", "F", "D#m", "G#"],
          ["F#", "A#m", "C#", "D#m", "B"],
          ["F#", "A#m", "F", "D#m", "G#"],
        ],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["1/8th note Staccato"],
          ["B", "A#", "C#"],
          ["D#", "f", "f#"],
          ["a#", "a", "b"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#"],
          ["A#", "B"],
          ["F#", "C#"],
          ["A#", "B"],
        ],
      },

      {
        code: "I",
        label: "INTERLUDE",
        chords: [
          ["Pause"],
          ["D#m", "C#", "F#", "B"],
          ["D#m", "C#", "F#", "B"],
          ["D#", "c#m"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#", "C#"],
          ["A#", "B"],
          ["F#", "C#"],
          ["A#", "B"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [["F#"]],
      },
    ],
  },
  {
    songTitle: "Shake It",
    artist: "Metro Station",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
        ],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["E", "F#m", "A", "B"],
          ["E", "F#m", "A", "B"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
          ["B", "C#m", "E", "A"],
        ],
      },

      {
        code: "PC",
        label: "POST-CHORUS",
        chords: [
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
          ["B", "C#m", "E", "A", "E"],
        ],
      },
    ],
  },
  {
    songTitle: "The Great Escape",
    artist: "Boys Like Girls",

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["E"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [["Don't Play"], ["C#m", "A"], ["E", "B"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "A"],
          ["E", "B"],
          ["C#m", "A"],
          ["E", "B"],
          ["F#m", "E/G#", "A", "B"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["E", "E"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [["E"], ["E"], ["C#m", "A"], ["E", "B"]],
      },

      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [["A"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "A"],
          ["E", "B"],
          ["C#m", "A"],
          ["E", "B"],
          ["F#m", "E/G#", "A", "B", "A"],
        ],
      },

      {
        code: "I",
        label: "INTERLUDE",
        chords: [["E/G#"], ["F#m"], ["B"]],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [["C#m", "A", "E", "B"], ["C#m", "A", "E", "B"], ["C#m"]],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["C#m", "A"],
          ["E", "B"],
          ["C#m", "A"],
          ["E", "B"],
          ["C#m"],
          ["A"],
          ["E", "B"],
          ["C#m", "A"],
          ["E", "B"],
          ["C#m"],
          ["A"],
          ["E", "B"],
          ["C#m", "A"],
          ["E", "B"],
          ["F#m", "E/G#", "A", "B"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["E", "E"],
          ["E", "E"],
          ["E", "E"],
          ["E", "E"],
        ],
      },
    ],
  },
  {
    songTitle: "Fireflies",
    artist: "Owl City",

    sections: [
      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["A", "D", "G"],
          ["A", "D", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [["Don't Play"]],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["A", "D", "G"],
          ["A", "D", "G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["G", "Bm", "A"],
          ["G", "D", "F#m", "G"],
          ["G", "D"],
          ["G", "A", "Bm"],
          ["G", "D", "A", "Bm"],
          ["G"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["A", "D", "G"],
          ["A", "D", "G"],
          ["A", "D", "G"],
          ["A", "D", "G x2"],
        ],
      },
      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["G", "Bm", "A"],
          ["G", "D", "F#m", "G"],
          ["G", "D"],
          ["G", "A", "Bm"],
          ["G", "D", "E", "F#m"],
          ["G", "Bm", "A"],
          ["G", "D", "F#m", "G"],
          ["G", "D"],
          ["G", "A", "Bm"],
          ["G", "D", "A", "Bm"],
          ["G"],
        ],
      },
    ],
  },
];
