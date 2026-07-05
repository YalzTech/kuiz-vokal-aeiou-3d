const QUESTIONS = [
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🐔",
    object: "ayam",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["epal", "ayam", "ikan", "ular"],
    answer: "ayam",
    explain: "Ayam bermula dengan bunyi A."
  },
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🍎",
    object: "epal",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["oren", "epal", "ikan", "api"],
    answer: "epal",
    explain: "Epal bermula dengan bunyi E."
  },
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🐟",
    object: "ikan",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["ikan", "itik", "iguana", "ubi"],
    answer: "ikan",
    explain: "Ikan bermula dengan bunyi I."
  },
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🍊",
    object: "oren",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["oren", "obor-obor", "otak", "ulat"],
    answer: "oren",
    explain: "Oren bermula dengan bunyi O."
  },
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🍇",
    object: "anggur",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["anggur", "epal", "awan", "anak"],
    answer: "anggur",
    explain: "Anggur bermula dengan bunyi A."
  },
  {
    level: "Tahap 1",
    type: "startSound",
    emoji: "🐍",
    object: "ular",
    question: "Apakah bunyi awal bagi gambar ini?",
    options: ["ular", "udang", "unta", "ubat"],
    answer: "ular",
    explain: "Ular bermula dengan bunyi U."
  },
  {
    level: "Tahap 2",
    type: "chooseImage",
    emoji: "🅰️",
    question: "Pilih gambar yang bermula dengan bunyi A.",
    options: ["ayam", "kereta", "buku", "bola"],
    answer: "ayam",
    explain: "Ayam bermula dengan bunyi A."
  },
  {
    level: "Tahap 2",
    type: "chooseImage",
    emoji: "✏️",
    question: "Pilih gambar yang bermula dengan bunyi E.",
    options: ["pensil", "gajah", "epal", "itik"],
    answer: "epal",
    explain: "Epal bermula dengan bunyi E."
  },
  {
    level: "Tahap 2",
    type: "chooseImage",
    emoji: "🐟",
    question: "Pilih gambar yang bermula dengan bunyi I.",
    options: ["ais", "ikan", "ketam", "bawang"],
    answer: "ikan",
    explain: "Ikan bermula dengan bunyi I."
  },
  {
    level: "Tahap 2",
    type: "chooseImage",
    emoji: "🍊",
    question: "Pilih gambar yang bermula dengan bunyi O.",
    options: ["payung", "oren", "itik", "kek"],
    answer: "oren",
    explain: "Oren bermula dengan bunyi O."
  },
  {
    level: "Tahap 2",
    type: "chooseImage",
    emoji: "🐍",
    question: "Pilih gambar yang bermula dengan bunyi U.",
    options: ["bintang", "rumah", "anggur", "ular"],
    answer: "ular",
    explain: "Ular bermula dengan bunyi U."
  },
  {
    level: "Tahap 3",
    type: "blank",
    emoji: "🦆",
    question: "Isi tempat kosong dengan vokal yang betul.",
    blank: "it__k",
    fullWord: "itik",
    options: ["a", "e", "i", "u"],
    answer: "i",
    explain: "Itik dieja I, T, I, K."
  },
  {
    level: "Tahap 3",
    type: "blank",
    emoji: "🔥",
    question: "Isi tempat kosong dengan vokal yang betul.",
    blank: "ap__",
    fullWord: "api",
    options: ["a", "e", "i", "u"],
    answer: "i",
    explain: "Api dieja A, P, I."
  },
  {
    level: "Tahap 3",
    type: "blank",
    emoji: "☁️",
    question: "Isi tempat kosong dengan vokal yang betul.",
    blank: "aw__n",
    fullWord: "awan",
    options: ["a", "e", "i", "u"],
    answer: "a",
    explain: "Awan dieja A, W, A, N."
  },
  {
    level: "Tahap 4",
    type: "sound",
    emoji: "🪼",
    question: "Bunyi vokal manakah yang berbunyi seperti 'oo' dalam perkataan obor-obor?",
    speech: "Bunyi vokal manakah yang berbunyi seperti O dalam perkataan obor-obor?",
    options: ["A", "E", "I", "O"],
    answer: "O",
    explain: "Obor-obor menggunakan bunyi vokal O."
  }
];
