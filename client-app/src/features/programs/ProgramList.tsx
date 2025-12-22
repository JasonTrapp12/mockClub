import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { IProgram } from "../../models/Program";
import { programsColumns } from "./ProgramsColumns";

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
      />
    </Box>
  );
};

export default ProgramList;
