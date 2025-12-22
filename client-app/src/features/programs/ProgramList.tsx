import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { IProgram } from "../../models/Program";
import { programsColumns } from "./ProgramsColumns";
import { alpha } from "@mui/material/styles";

interface IProgramListProps {
  programs: IProgram[];
  gender: string;
}

const ProgramList = (props: IProgramListProps) => {
  const { programs, gender } = props;
  const theme = useTheme();

  return (
    <Box>
      <Typography color={theme.palette.text.primary} variant="h2" mb={3}>
        {gender} Programs
      </Typography>

      <DataGrid
        columns={programsColumns}
        rows={programs.map((program) => ({ ...program, id: program.teamName }))}
        autoHeight
        hideFooter
        sx={{
          borderRadius: 4,
          "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.22),
          },

          "& .MuiDataGrid-columnHeader": {
            color: theme.palette.text.primary,
            fontWeight: 700,
          },
          "& .MuiDataGrid-cell": {
            color: theme.palette.text.primary,
          },
        }}
      />
    </Box>
  );
};

export default ProgramList;
