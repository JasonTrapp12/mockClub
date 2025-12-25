import {
  Box,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Collapse,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { alpha } from "@mui/material/styles";
import { useState } from "react";

import type { IProgram } from "../../models/Program";
import { programsColumns } from "./ProgramsColumns";

interface IProgramListProps {
  programs: IProgram[];
  gender: string;
}

const ProgramList = ({ programs, gender }: IProgramListProps) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        backgroundColor: theme.palette.background.default,
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        {/* Header */}
        <Box
          onClick={() => setExpanded((prev) => !prev)}
          sx={{
            cursor: "pointer",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                letterSpacing: 2,
                fontWeight: 600,
              }}
            >
              {gender} Programs
            </Typography>

            <IconButton
              disableRipple
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 250ms ease",
              }}
            >
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Expanding underline */}
          <Box
            sx={{
              height: 4,
              width: expanded ? "100%" : "25%",
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 2,
              mt: 1,
              transition: "width 300ms ease",
            }}
          />
        </Box>

        {/* Collapsible content */}
        <Collapse in={expanded} timeout={300} unmountOnExit>
          <Box
            sx={{
              animation: "fadeSlide 300ms ease",
              "@keyframes fadeSlide": {
                from: { opacity: 0, transform: "translateY(-8px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <DataGrid
              autoHeight
              hideFooter
              rows={programs.map((program) => ({
                ...program,
                id: program.teamName,
              }))}
              columns={programsColumns}
              sx={{
                mt: 0,
                borderRadius: "0 0 16px 16px",
                boxShadow: theme.shadows[6],
                border: "none",

                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.85),
                  borderBottom: `1px solid ${alpha(
                    theme.palette.common.white,
                    0.2
                  )}`,
                },

                "& .MuiDataGrid-columnHeaderTitle": {
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  color: theme.palette.text.secondary,
                },

                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },

                "& .MuiDataGrid-row:nth-of-type(odd)": {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                },

                "& .MuiDataGrid-row:hover": {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.15),
                },
              }}
            />
          </Box>
        </Collapse>
      </Stack>
    </Paper>
  );
};

export default ProgramList;
