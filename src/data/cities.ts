export type CityStatus = "launch" | "coming-soon";

export type City = {
  name: string;
  region: string;
  status: CityStatus;
};

export const CITIES: City[] = [
  { name: "Kumasi", region: "Ashanti Region", status: "launch" },
  { name: "Accra", region: "Greater Accra Region", status: "coming-soon" },
  { name: "Tema", region: "Greater Accra Region", status: "coming-soon" },
  { name: "Takoradi", region: "Western Region", status: "coming-soon" },
  { name: "Cape Coast", region: "Central Region", status: "coming-soon" },
  { name: "Tamale", region: "Northern Region", status: "coming-soon" },
  { name: "Sunyani", region: "Bono Region", status: "coming-soon" },
  { name: "Koforidua", region: "Eastern Region", status: "coming-soon" },
  { name: "Ho", region: "Volta Region", status: "coming-soon" },
  { name: "Techiman", region: "Bono East Region", status: "coming-soon" },
];
