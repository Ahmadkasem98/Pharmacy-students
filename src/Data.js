export const years = [
  { id: 1, name: "First Year" },
  { id: 2, name: "Second Year" },
  { id: 3, name: "Third Year" },
];
export const subjects = [
  { id: 1, yearId: 1, name: "Human Anatomy and Physiology" },
  { id: 2, yearId: 1, name: "Pharmaceutics" },
  { id: 3, yearId: 1, name: "Remedial Biology" },
  { id: 4, yearId: 1, name: "Pharmaceutical Analysis" },
  { id: 5, yearId: 1, name: "Pharmaceutical Inorganic Chemistry" },
  { id: 6, yearId: 2, name: "Physical Pharmaceutics" },
  { id: 7, yearId: 2, name: "Pharmaceutical Microbiology" },
  { id: 8, yearId: 2, name: "Pharmaceutical Engineering" },
  { id: 9, yearId: 2, name: "Pharmaceutical Organic Chemistry" },
  { id: 10, yearId: 2, name: "Medicinal Chemistry" },
  { id: 11, yearId: 3, name: "Industrial Pharmacy" },
  { id: 12, yearId: 3, name: "Medicinal Chemistry" },
];
export const teachers = [
  { id: 1, subjectsIds: [1], name: "Gary Cabrera" },
  { id: 2, subjectsIds: [1], name: "Stacy Logan" },
  { id: 3, subjectsIds: [1, 2], name: "Priscilla Phelps" },
  { id: 4, subjectsIds: [2, 7], name: "Aliza Vance" },
  { id: 5, subjectsIds: [3], name: "Averie Carter" },
  { id: 6, subjectsIds: [3, 8, 11], name: "Savannah Brooks" },
  { id: 7, subjectsIds: [4], name: "Belen Fox" },
  { id: 8, subjectsIds: [4, 5], name: "Yadira Mcintyre" },
  { id: 9, subjectsIds: [5, 12], name: "Grayson Stout" },
  { id: 10, subjectsIds: [6], name: "Maurice Phillips" },
  { id: 11, subjectsIds: [6, 12], name: "Ayaan Herring" },
  { id: 12, subjectsIds: [6], name: "Deon Farrell" },
  { id: 13, subjectsIds: [7], name: "Fisher Frederick" },
  { id: 14, subjectsIds: [8], name: "Deandre Schroeder" },
  { id: 15, subjectsIds: [8], name: "Elisabeth Nelson" },
  { id: 16, subjectsIds: [9], name: "Juliana Stevens" },
  { id: 17, subjectsIds: [9, 11], name: "Reagan Moss" },
  { id: 18, subjectsIds: [10], name: "Drake Cisneros" },
  { id: 19, subjectsIds: [10], name: "Reed Greer" },
];

export const times = [
  {
    id: 1,
    timeOptions: [
      { subjectId: 1, teacherId: 1 },
      { subjectId: 6, teacherId: 11 },
    ],
    name: "Monday – 08:00am",
  },
  {
    id: 2,
    timeOptions: [
      { subjectId: 1, teacherId: 1 },
      { subjectId: 4, teacherId: 7 },
      { subjectId: 5, teacherId: 8 },
      { subjectId: 8, teacherId: 15 },
    ],
    name: "Thursday – 02:00pm",
  },
  {
    id: 3,
    timeOptions: [
      { subjectId: 1, teacherId: 2 },
      { subjectId: 5, teacherId: 8 },
      { subjectId: 6, teacherId: 10 },
      { subjectId: 12, teacherId: 11 },
    ],
    name: "Monday – 10:00am",
  },
  {
    id: 4,
    timeOptions: [
      { subjectId: 1, teacherId: 2 },
      { subjectId: 2, teacherId: 3 },
      { subjectId: 6, teacherId: 11 },
      { subjectId: 7, teacherId: 13 },
      { subjectId: 11, teacherId: 17 },
    ],
    name: "Tuesday – 02:00pm",
  },
  {
    id: 5,
    timeOptions: [
      { subjectId: 1, teacherId: 3 },
      { subjectId: 4, teacherId: 8 },
      { subjectId: 7, teacherId: 4 },
      { subjectId: 12, teacherId: 9 },
    ],
    name: "Sunday – 10:00am",
  },
  {
    id: 6,
    timeOptions: [
      { subjectId: 2, teacherId: 4 },
      { subjectId: 6, teacherId: 12 },
      { subjectId: 10, teacherId: 18 },
    ],
    name: "Sunday – 12:00",
  },
  {
    id: 7,
    timeOptions: [
      { subjectId: 2, teacherId: 3 },
      { subjectId: 11, teacherId: 6 },
    ],
    name: "Monday – 12:00am",
  },
  {
    id: 8,
    timeOptions: [
      { subjectId: 3, teacherId: 5 },
      { subjectId: 5, teacherId: 9 },
    ],
    name: "Sunday – 02:00pm",
  },
  {
    id: 9,
    timeOptions: [
      { subjectId: 3, teacherId: 5 },
      { subjectId: 9, teacherId: 17 },
      { subjectId: 12, teacherId: 11 },
    ],
    name: "Tuesday – 12:00pm",
  },
  {
    id: 10,
    timeOptions: [{ subjectId: 3, teacherId: 6 }],
    name: "Wednesday 12:00pm",
  },
  {
    id: 11,
    timeOptions: [
      { subjectId: 6, teacherId: 10 },
      { subjectId: 9, teacherId: 16 },
      { subjectId: 10, teacherId: 19 },
    ],
    name: "Thursday – 12:00pm",
  },
  {
    id: 12,
    timeOptions: [{ subjectId: 7, teacherId: 13 }],
    name: "Monday – 02:00pm",
  },
  {
    id: 13,
    timeOptions: [{ subjectId: 8, teacherId: 14 }],
    name: "Wednesday –02:00pm",
  },
  {
    id: 14,
    timeOptions: [{ subjectId: 8, teacherId: 14 }],
    name: "Tuesday – 10:00am",
  },
  {
    id: 15,
    timeOptions: [
      { subjectId: 8, teacherId: 6 },
      { subjectId: 10, teacherId: 19 },
    ],
    name: "Wednesday 10:00am",
  },
  {
    id: 16,
    timeOptions: [{ subjectId: 11, teacherId: 6 }],
    name: "Thursday – 8:00am",
  },
];
