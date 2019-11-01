import axios from "axios";

export const diseases = [
  "Hepatitis B",
  "Rotavirus",
  "Diphthetria",
  "Tetanus & acellular pertussis",
  "Mumps",
  "Rubella",
  "Measles",
  "Varicella",
  "Hepatitis A",
  "Polyomelitis",
  "Haemophilus",
  "Pneumococcal",
  "Meningococcal meningitis",
  "Hpv",
  "Influenza"
];

export function getDiseases() {
  return axios.get("/diseases");
}
