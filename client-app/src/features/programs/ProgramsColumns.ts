import type { GridColDef } from "@mui/x-data-grid";

export const programsColumns: GridColDef[] = [
  { field: "teamName", headerName: "Team", flex: 1, minWidth: 130 },
  { field: "birthyear", headerName: "Birth Year", flex: 1, minWidth: 130 },
  { field: "coachName", headerName: "Coach", flex: 1, minWidth: 130 },
  { field: "league", headerName: "League", flex: 1, minWidth: 130 },
  { field: "coachEmail", headerName: "Email", flex: 1, minWidth: 130 },
];
