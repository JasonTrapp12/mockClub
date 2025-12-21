import type { IBase } from "./Base";

export interface INews extends IBase {
  title: string;
  images: string[];
  content: string;
  date: Date;
}
