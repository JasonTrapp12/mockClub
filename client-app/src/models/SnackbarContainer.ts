export interface ISnackbarContainer {
  open: boolean;
  message?: string;
}

export const defaultSnackbarContainer = {
  open: false,
};
