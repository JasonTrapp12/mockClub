import { create } from "zustand";

interface IModalStore {
  snackbarOpen: boolean;
  setSnackbarOpen: (open: boolean) => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  snackbarOpen: false,
  setSnackbarOpen: (open) => {
    set({ snackbarOpen: open });
  },
}));
