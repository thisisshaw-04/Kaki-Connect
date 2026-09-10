export const brand = {
  name: "KakiConnect",
  shortLine: "Company nearby",
  promise:
    "A slower neighbourhood companion — a walk, a chat over kopi, or someone beside you on the way.",
};

export const senior = {
  id: "uncle-tan",
  name: "Uncle Tan",
  fullName: "Tan Ah Kow",
  age: 76,
  neighbourhood: "Bedok North",
  languages: ["Hokkien", "English", "Mandarin"],
  interests: ["Fishing", "Morning walks", "Kopitiam"],
  sharingWithFamily: true,
};

export const familyMember = {
  id: "priya",
  name: "Priya Tan",
  relation: "Daughter",
  livesIn: "Punggol",
  linkedTo: senior.id,
};

export const volunteer = {
  id: "wei-ming",
  name: "Wei Ming",
  age: 28,
  neighbourhood: "Tampines",
};

export const friends = [
  {
    id: "raymond",
    name: "Uncle Raymond",
    fullName: "Raymond Tan",
    age: 70,
    neighbourhood: "Toa Payoh",
    shared: "Gardening and oldies on the radio",
    languages: "Hokkien, Cantonese, English",
    online: true,
    lastChat: "Yesterday · 22 min",
  },
  {
    id: "ahmad",
    name: "Ahmad",
    age: 74,
    neighbourhood: "Bedok South",
    shared: "Fishing at the reservoir",
    languages: "Malay, English",
    online: false,
    lastChat: "Tuesday walk",
  },
  {
    id: "susan",
    name: "Auntie Susan",
    age: 71,
    neighbourhood: "Eunos",
    shared: "Dim sum and karaoke",
    languages: "Mandarin, English",
    online: true,
    lastChat: "Last Saturday",
  },
] as const;

export const outing = {
  id: "fishing-today",
  title: "Sunset fishing & kopi",
  place: "Bedok Reservoir · Pavilion A",
  area: "Bedok Reservoir Park",
  start: "4:30 PM",
  end: "6:15 PM",
  expectedHome: "6:30 PM",
  weather: "Bright and breezy · 29°C",
  access: ["Step-free path", "Shaded benches", "Toilet nearby"],
  companions: [
    { name: "Ahmad", note: "Fishing buddy" },
    { name: "Auntie Susan", note: "Bringing extra bait" },
  ],
  volunteerName: volunteer.name,
  notes: "Gentle afternoon by the water. Volunteer walks with Uncle Tan from the block.",
};

export const checkIns = [
  {
    id: "left",
    label: "Left home",
    time: "3:42 PM",
    detail: "Wei Ming met Dad at Block 123. They took the 5 bus.",
    done: true,
  },
  {
    id: "arrived",
    label: "Arrived",
    time: "4:18 PM",
    detail: "At Pavilion A. Seated, drinking kopi, waiting for the others.",
    done: true,
  },
  {
    id: "settled",
    label: "Settled in",
    time: "4:36 PM",
    detail: "Ahmad and Auntie Susan joined. Lines in the water.",
    done: true,
  },
  {
    id: "wrap",
    label: "Wrapping up",
    time: "Expected 6:15 PM",
    detail: "Volunteer will tap this when they pack up.",
    done: false,
  },
  {
    id: "home",
    label: "Home",
    time: "Expected 6:30 PM",
    detail: "Family gets a note when he’s back at the block.",
    done: false,
  },
] as const;

export const week = [
  {
    day: "Mon",
    date: "7 Sep",
    title: "Quiet day at home",
    kind: "home" as const,
    status: "done" as const,
  },
  {
    day: "Tue",
    date: "8 Sep",
    title: "Morning walk, Bedok Reservoir Park",
    kind: "outing" as const,
    status: "done" as const,
    with: "Ahmad · 40 min",
  },
  {
    day: "Wed",
    date: "9 Sep",
    title: "Video chat with Uncle Raymond",
    kind: "call" as const,
    status: "done" as const,
    with: "22 minutes · gardening talk",
  },
  {
    day: "Thu",
    date: "10 Sep",
    title: outing.title,
    kind: "outing" as const,
    status: "live" as const,
    with: "Ahmad, Auntie Susan, Wei Ming",
  },
  {
    day: "Sat",
    date: "12 Sep",
    title: "Dim sum at East Coast Lagoon",
    kind: "outing" as const,
    status: "upcoming" as const,
    with: "Auntie Susan · volunteer not booked yet",
  },
];

export const familyShare = {
  yes: [
    "When he leaves for a booked outing",
    "Who he’s with (first names)",
    "Volunteer check-ins: left, arrived, wrapping up, home",
    "That a video chat happened, and for how long",
  ],
  no: [
    "Live GPS or a moving map",
    "Medical notes or care details",
    "What was said on a call",
    "Where he is when he’s just at home",
  ],
};

export const activities = [
  outing,
  {
    id: "dimsum",
    title: "Saturday dim sum",
    place: "East Coast Lagoon Food Village",
    area: "East Coast",
    start: "9:00 AM",
    end: "11:00 AM",
    expectedHome: "11:40 AM",
    weather: "Warm · 30°C",
    access: ["Level walkway", "Plenty of seats"],
    companions: [{ name: "Auntie Susan", note: "Regular table" }],
    volunteerName: null,
    notes: "Easy morning. No stairs into the hawker centre.",
  },
  {
    id: "walk",
    title: "Slow morning walk",
    place: "Bedok Reservoir Park loop",
    area: "Bedok",
    start: "7:30 AM",
    end: "8:15 AM",
    expectedHome: "8:30 AM",
    weather: "Cooler morning",
    access: ["Flat path", "Benches every 200m"],
    companions: [{ name: "Ahmad", note: "Same pace" }],
    volunteerName: null,
    notes: "Short loop. Turn back whenever the legs say so.",
  },
];

export const volunteerRequests = [
  {
    id: "fishing-today",
    title: outing.title,
    senior: senior.name,
    when: "Today · 3:40 PM pickup",
    place: outing.place,
    need: "Walk from the block, stay for the afternoon, walk home.",
    group: "Ahmad and Auntie Susan already going",
  },
  {
    id: "market",
    title: "Tuesday wet market",
    senior: "Auntie Lim",
    when: "Tue · 7:00 AM",
    place: "Bedok North Market",
    need: "Help with bags, no lifting of heavy crates.",
    group: "On her own this week",
  },
];
