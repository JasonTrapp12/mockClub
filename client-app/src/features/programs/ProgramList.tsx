import { Box, Stack, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { IProgram } from "../../models/Program";
import { programsColumns } from "./ProgramsColumns";
import { alpha } from "@mui/material/styles";
import { useSmallScreen } from "../../hooks/useSmallScreen";

interface IProgramListProps {
  programs: IProgram[];
  gender: string;
}

const ProgramList = (props: IProgramListProps) => {
  const { programs, gender } = props;
  const theme = useTheme();
  const smallScreen = useSmallScreen();

  return (
    <Stack>
      {/* <Typography color={theme.palette.text.primary} variant="h2" mb={3}>
        {gender} Programs
      </Typography> */}
      <Typography
        variant="h2"
        sx={{ letterSpacing: 3, textAlign: "start", mb: 3 }}
      >
        <span>{gender} Programs</span>
        <Box
          sx={{
            height: 5,
            backgroundColor: theme.palette.secondary.main,
            width: 0,
            mt: 0.5,
            animation: "underlineGrow 1s forwards",
            "@keyframes underlineGrow": {
              "0%": { width: 0 },
              "100%": { width: "15%" },
            },
          }}
        />
      </Typography>

      <DataGrid
        columns={programsColumns}
        rows={programs.map((program) => ({ ...program, id: program.teamName }))}
        autoHeight
        hideFooter
        sx={{
          borderRadius: 4,
          boxShadow: theme.shadows[5],
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
    </Stack>
  );
};

export default ProgramList;
