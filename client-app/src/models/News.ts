import type { IBase } from "./Base";

export interface INews extends IBase {
  id: string;
  title: string;
  images: string[];
  content: string;
  date: Date;
}
