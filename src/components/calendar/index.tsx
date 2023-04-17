import GeneratorDate from "@/utils/generatorDate";
import { Box } from "@mui/material";
import moment from "moment";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<moment.Moment>(() => moment("2024.01.27"));

  GeneratorDate.generatorDate(date);
  return <Box>달력</Box>;
};

export default Calendar;
