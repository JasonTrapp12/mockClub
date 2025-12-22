import { Stack } from "@mui/material";
import ProgramList from "./ProgramList";
import { programs } from "../../mockData/programs";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const Programs = () => {
  const smallScreen = useSmallScreen();
  return (
    <Stack
      pt={smallScreen ? 10 : 23}
      pb={smallScreen ? 5 : 10}
      px={{ xs: 2, md: 20 }}
      spacing={smallScreen ? 10 : 15}
    >
      <ProgramList gender="Boys" programs={programs} />
      <ProgramList gender="Girls" programs={programs} />
    </Stack>
  );
};
export default Programs;
