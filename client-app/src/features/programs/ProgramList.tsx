import {
  Box,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Collapse,
  Card,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { IProgram } from "../../models/Program";
import { programsColumns } from "./ProgramsColumns";
import { alpha } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface IProgramListProps {
  programs: IProgram[];
  gender: string;
}

const ProgramList = (props: IProgramListProps) => {
  const { programs, gender } = props;
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.default,
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <Box display="flex" alignItems="center">
          {/* Title + underline */}
          <Stack>
            <Typography
              variant="h2"
              sx={{
                letterSpacing: 3,
                textAlign: "start",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span>{gender} Programs</span>
              {/* <Box
              sx={{
                height: 5,
                backgroundColor: theme.palette.secondary.main,
                width: 0,
                ml: 1,
                animation: "underlineGrow 1s forwards",
                "@keyframes underlineGrow": {
                  "0%": { width: 0 },
                  "100%": { width: "15%" },
                },
              }}
            /> */}
            </Typography>
          </Stack>

          {/* Expand/Collapse button */}
          <IconButton
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <ExpandMoreIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Box>

        {/* Collapsible DataGrid */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <DataGrid
            columns={programsColumns}
            rows={programs.map((program) => ({
              ...program,
              id: program.teamName,
            }))}
            autoHeight
            hideFooter
            sx={{
              borderRadius: 4,
              boxShadow: theme.shadows[5],
              "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.6),
              },
              "& .MuiDataGrid-columnHeader": {
                color: theme.palette.text.secondary,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              },
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: alpha(theme.palette.background.paper, 0.05),
              },
            }}
          />
        </Collapse>
      </Stack>
    </Paper>
  );
};

export default ProgramList;
