import axios from "axios";

export const diseasesFind = [
  { name: "Hepatitis B", id: 1 },
  { name: "Rotavirus", id: 2 },
  { name: "Diphthetria", id: 3 },
  { name: "Tetanus & acellular pertussis", id: 4 },
  { name: "Mumps", id: 5 },
  { name: "Rubella", id: 6 },
  { name: "Measles", id: 7 },
  { name: "Varicella", id: 8 },
  { name: "Hepatitis A", id: 9 },
  { name: "Polyomelitis", id: 10 },
  { name: "Haemophilus", id: 11 },
  { name: "Pneumococcal", id: 12 },
  { name: "Meningococcal meningitis", id: 13 },
  { name: "Hpv", id: 14 },
  { name: "Influenza", id: 15 }
];

export function getDiseases() {
  return axios.get("/diseasesContent");
}
