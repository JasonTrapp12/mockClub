import { create } from "zustand";
import {
  defaultSnackbarContainer,
  type ISnackbarContainer,
} from "../models/SnackbarContainer";

interface IModalStore {
  snackbar: ISnackbarContainer;
  setSnackbarOpen: (open: ISnackbarContainer) => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  snackbar: defaultSnackbarContainer,
  setSnackbarOpen: (open) => {
    set({ snackbar: open });
  },
}));
