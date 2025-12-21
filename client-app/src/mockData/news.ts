import type { INews } from "../models/News";

export const news: INews[] = [
  {
    id: "16fd2504-5824-401e-90c7-78d6afd1e4e7",
    title: "Team Wins Championship",
    date: new Date("2025-10-15"),
    images: [
      "https://e0.365dm.com/25/05/1600x900/ecb5452da037365695d8442de6f319404f009bc6b794b2191fc77495304d2e9a_6904867.jpg?20250503162314",
    ],
    createdAt: new Date("2025-10-15"),
    updatedAt: new Date("2025-10-15"),
    content: "The club has won the championship after a hard-fought season.",
  },
  {
    id: "c9479579-5837-4726-81dd-8f66114c1fc4",
    title: "Tryouts Announced",
    date: new Date("2025-10-16"),
    images: [],
    createdAt: new Date("2025-10-16"),
    updatedAt: new Date("2025-10-16"),
    content: "A new player has joined the team.",
  },
];
