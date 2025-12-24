import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link, Typography } from "@mui/material";

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
    minWidth: 160,
    renderHeader: () => <Typography fontWeight={700}>Email</Typography>,
    renderCell: (params: GridRenderCellParams) => (
      <Link href={`mailto:${params.value}`} underline="hover">
        {params.value}
      </Link>
    ),
  },
];
