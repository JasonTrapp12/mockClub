import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import EmailCell from "./EmailCell";

export const programsColumns: GridColDef[] = [
  {
    field: "teamName",
    headerName: "Team",
    flex: 1,
    minWidth: 130,
    renderHeader: () => <Typography fontWeight={700}>Team</Typography>,
  },
  {
    field: "birthyear",
    headerName: "Birth Year",
    flex: 1,
    minWidth: 130,
    renderHeader: () => <Typography fontWeight={700}>Birth Year</Typography>,
  },
  {
    field: "coachName",
    headerName: "Coach",
    flex: 1,
    minWidth: 130,
    renderHeader: () => <Typography fontWeight={700}>Coach</Typography>,
  },
  {
    field: "league",
    headerName: "League",
    flex: 1,
    minWidth: 130,
    renderHeader: () => <Typography fontWeight={700}>League</Typography>,
  },
  {
    field: "coachEmail",
    headerName: "Email",
    flex: 1,
    minWidth: 330,
    renderHeader: () => <Typography fontWeight={700}>Email</Typography>,
    renderCell: (params: GridRenderCellParams) => (
      <EmailCell email={params.value as string} />
    ),
  },
];
