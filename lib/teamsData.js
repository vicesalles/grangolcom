// /lib/teamsData.js
// Language-independent data for Provincial League teams.
// Translatable content lives in public/locales/<lang>/teams.json.
// 3D assets (when available) should be placed under public/3d/players/<id>.glb
// and public/3d/teams/<id>.glb.

export const teamsData = [
  {
    id: "vapor",
    key: "millworks",
    colors: {
      main: "black",
      second: "white",
      text: "red",
      shorts: "black",
    },
    pattern: "stripes",
    players: [
      { id: "fatima", name: "Fàtima", number: 8, isMainPlayer: true, role: "midfielder", model3d: null },
    ],
  },
  {
    id: "olivera",
    key: "greendale",
    colors: {
      main: "green",
      second: "white",
      text: "white",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "aina", name: "Aina", number: 6, isMainPlayer: true, role: "defender", model3d: null },
    ],
  },
  {
    id: "miner",
    key: "coalvale",
    colors: {
      main: "yellow",
      second: "black",
      text: "white",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "otger", name: "Otger", number: 10, isMainPlayer: true, role: "midfielder", model3d: null },
    ],
  },
  {
    id: "victoria",
    key: "victoria",
    colors: {
      main: "black",
      second: "white",
      text: "white",
      shorts: "white",
    },
    pattern: null,
    players: [
      { id: "marti", name: "Martí", number: 3, isMainPlayer: true, role: "defender", model3d: null },
    ],
  },
  {
    id: "nautic",
    key: "whiteshore",
    colors: {
      main: "blue",
      second: "white",
      text: "white",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "ot", name: "Ot", number: 8, isMainPlayer: true, role: "midfielder", model3d: null },
    ],
  },
  {
    id: "dos_fars",
    key: "two_lights",
    colors: {
      main: "blue",
      second: "yellow",
      text: "white",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "narcis", name: "Narcís", number: 2, isMainPlayer: true, role: "defender", model3d: null },
    ],
  },
  {
    id: "pescador",
    key: "harbormen",
    colors: {
      main: "white",
      second: "blue",
      text: "blue",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "marina_p", name: "Marina", number: 1, isMainPlayer: true, role: "goalkeeper", model3d: null },
    ],
  },
  {
    id: "nou_vapor",
    key: "new_millworks",
    colors: {
      main: "blue",
      second: "white",
      text: "yellow",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "marina_nv", name: "Marina", number: 1, isMainPlayer: true, role: "goalkeeper", model3d: null },
    ],
  },
  {
    id: "politecnic",
    key: "polytechnic",
    colors: {
      main: "red",
      second: "black",
      text: "white",
      shorts: "black",
    },
    pattern: null,
    players: [
      { id: "marina_pt", name: "Marina", number: 1, isMainPlayer: true, role: "goalkeeper", model3d: null },
    ],
  },
  {
    id: "guilla",
    key: "foxwood",
    colors: {
      main: "orange",
      second: "white",
      text: "white",
      shorts: "white",
    },
    pattern: null,
    players: [
      { id: "marina_g", name: "Marina", number: 1, isMainPlayer: true, role: "goalkeeper", model3d: null },
    ],
  },
];
