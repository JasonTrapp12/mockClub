import { create } from "zustand";
import type { INews } from "../models/News";
import { supabase } from "../supabase/supabase";

interface INewsStore {
  newsList: INews[] | null;
  newsListLoading: boolean;

  news: INews | null;
  newsLoading: boolean;

  setNewsList: () => void;
  setNews: (id: string) => void;
}

export const useNewsStore = create<INewsStore>((set) => ({
  newsList: null,
  newsListLoading: false,

  news: null,
  newsLoading: false,

  setNewsList: async () => {
    set({ newsListLoading: true });
    const { data, error } = await supabase.from("News").select("*");

    if (error) {
      console.error(error);
    } else {
      const formattedData = data.map((news) => ({
        ...news,
        date: new Date(news.date),
      }));
      set({ newsList: formattedData });
    }
    set({ newsListLoading: false });
  },

  setNews: async (id) => {
    set({ newsLoading: true });
    const { data, error } = await supabase
      .from("News")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error(error);
    } else {
      //   const formattedData = data.map((news) => ({
      //     ...news,
      //     date: new Date(news.date),
      //   }));
      const formattedData = { ...data, date: new Date(data.date) };
      set({ news: formattedData });
    }
    set({ newsLoading: false });
  },
}));
