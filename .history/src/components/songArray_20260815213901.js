export const songArray = [
  {
    songTitle: "Numb",
    artist: "Linkin Park",
    setlistOrder: 2,

    chartMeta: {
      page: "1/1",
      key: "F#m",
      tempo: 110,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "C", "V2", "C", "B", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["F#m", "D", "A", "E"], ["F#m", "D", "A"], ["E"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["F#m", "D", "A", "E"],
          ["F#m", "D", "A", "E"],
        ],
      },
      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["D", "F#m", "E"],
          ["F#m", "A", "D"],
          ["D", "F#m", "E"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["F#m", "D", "A"],
          ["E", "F#m"],
          ["D", "A"],
          ["E", "F#m"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["F#m", "D", "A", "E"],
          ["F#m", "D", "A", "E"],
        ],
      },
      {
        code: "PC",
        label: "PRE-CHORUS",
        chords: [
          ["D", "F#m", "E"],
          ["F#m", "A", "D"],
          ["D", "F#m", "E"],
          ["F#m", "A", "D"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [["D", "E"], ["F#m", "G#m", "A", "C#", "D"], ["E"], ["C#"]],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["F#m", "D", "A"],
          ["E", "F#m"],
          ["D", "A"],
          ["E", "F#m"],
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
    songTitle: "Welcome to the Black Parade",
    artist: "My Chemical Romance",
    setlistOrder: 4,

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
      "C",
      "O",
    ],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["G", "D", "Em", "Bm"], ["C", "Bm"], ["Am"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am"],
        ],
      },

      {
        code: "V3",
        label: "VERSE 3",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am"],
        ],
      },

      {
        code: "V4",
        label: "VERSE 4",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am", "D"],
        ],
      },

      {
        code: "I2",
        label: "INTERLUDE",
        chords: [
          ["G", "D", "Em", "Bm"],
          ["C", "Bm", "Am"],
        ],
      },

      {
        code: "V5",
        label: "VERSE 5",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am"],
        ],
      },

      {
        code: "V6",
        label: "VERSE 6",
        chords: [
          ["D", "G", "D"],
          ["Em", "Bm", "C"],
          ["Bm", "Am", "D", "G"],
        ],
      },

      {
        code: "I3",
        label: "INTERLUDE",
        chords: [
          ["G", "D", "Em", "D"],
          ["C", "G/B"],
        ],
      },

      {
        code: "V7",
        label: "VERSE 7",
        chords: [
          ["Am", "G", "D/F#", "F", "C"],
          ["G", "D"],
          ["G", "D/F#", "F", "C"],
          ["G", "D"],
          ["G"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["D/F#", "Em"],
          ["D", "C"],
          ["D", "G"],
          ["D/F#", "Em"],
          ["D", "C"],
          ["D"],
        ],
      },

      {
        code: "V8",
        label: "VERSE 8",
        chords: [
          ["G", "D/F#", "F", "C"],
          ["G", "D"],
          ["G", "D/F#"],
          ["F", "C"],
          ["G", "D"],
          ["G"],
        ],
      },

      {
        code: "B1",
        label: "BRIDGE 1",
        chords: [
          ["B", "Em"],
          ["B", "Em"],
          ["C", "D#", "Cm", "G"],
        ],
      },

      {
        code: "B2",
        label: "BRIDGE 2",
        chords: [
          ["D/F#", "Em", "D", "C"],
          ["G", "C", "D", "G"],
          ["D/F#", "Em", "D", "C"],
          ["G"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["C", "D", "A"],
          ["E/G#"],
          ["F#m", "E", "D"],
          ["A"],
          ["E"],
          ["A"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["A", "E/G#", "F#m", "E", "D"],
          ["E", "A"],
          ["E/G#", "F#m", "E", "D"],
          ["E", "A"],
        ],
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
      key: "Db",
      tempo: 130,
      timeSignature: "4/4",
    },

    order: ["I", "V1", "P", "C", "V2", "P", "C", "B", "S", "I2", "C", "O"],

    sections: [
      {
        code: "I",
        label: "INTRO",
        chords: [["Db", "Ab", "Gb", "Ab"]],
      },

      {
        code: "V1",
        label: "VERSE 1",
        chords: [
          ["Db", "Ab", "Db", "Gb"],
          ["Db", "Ab", "Gb"],
          ["Db", "Ab", "Db", "Gb"],
          ["Db", "Ab", "Gb"],
        ],
      },

      {
        code: "P",
        label: "PRE-CHORUS",
        chords: [
          ["Bbm", "Gb", "Db"],
          ["Bbm", "Gb", "Ab"],
        ],
      },

      {
        code: "C",
        label: "CHORUS",
        chords: [
          ["Db", "Ab", "Gb", "Ab"],
          ["Db", "Ab", "Gb", "A", "Ab"],
          ["Db", "Ab", "Gb", "Ab"],
          ["Db", "Ab", "Gb"],
        ],
      },

      {
        code: "V2",
        label: "VERSE 2",
        chords: [
          ["Db", "Ab", "Db", "Gb"],
          ["Db", "Ab", "Gb"],
          ["Db", "Ab", "Db", "Gb"],
          ["Db", "Ab", "Gb"],
        ],
      },

      {
        code: "B",
        label: "BRIDGE",
        chords: [
          ["Bbm", "Ab", "Gb", "Ab"],
          ["Bbm", "Db", "Ab"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["Db", "Ab", "Db", "Gb"],
          ["Db", "Ab", "Gb"],
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
          ["Db", "Ab", "Gb", "Ab"],
          ["Db", "Ab", "Gb", "Ab"],
          ["Db", "Ab", "Gb", "Ab"],
          ["Db", "Ab", "Gb", "Ab", "Db"],
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
        ],
      },
      {
        code: "B3",
        label: "BRIDGE 3 - Key Change",
        chords: [
          ["A", "G#m", "Em", "D", "C"],
          ["G", "C", "D"],
        ],
      },

      {
        code: "S",
        label: "SOLO",
        chords: [
          ["C", "D", "A"],
          ["E/G#"],
          ["F#m", "E", "D"],
          ["A"],
          ["E"],
          ["A"],
        ],
      },

      {
        code: "C2",
        label: "FINAL CHORUS",
        chords: [
          ["E/G#", "F#m"],
          ["E", "D"],
          ["E", "A"],
          ["E/G#", "F#m"],
          ["E", "D"],
          ["E"],
        ],
      },

      {
        code: "O",
        label: "OUTRO",
        chords: [
          ["A", "E/G#", "F#m", "E", "D"],
          ["E", "A"],
          ["E/G#", "F#m", "E", "D"],
          ["E", "A"],
        ],
      },
    ],
  },
];
