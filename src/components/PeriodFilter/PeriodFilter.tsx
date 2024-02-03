import theme from "@/app/theme";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { ReactNode, useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export enum DataPeriod {
  Week = "Week",
  Month = "Month",
}

interface PeriodFilterProps {
  defaultPeriod: DataPeriod;
  periods?: DataPeriod[];
  children: (dateRange: DateRange) => ReactNode;
}

export interface DateRange {
  start: string;
  end: string;
}

const formatDate = (date: DateRange, period: DataPeriod): string => {
  if (period === DataPeriod.Week) {
    const weekStart = moment(date.start).format("ddd, Do MMM");
    const weekEnd = moment(date.end).format("ddd, Do MMM");
    return `${weekStart} - ${weekEnd}`;
  } else {
    const formattedDate = moment(date.start).format("MMMM, YYYY");
    return formattedDate;
  }
};

const calculateWeek = (date: Date): DateRange => {
  const weekStart = moment(date).startOf("isoWeek");
  const weekEnd = moment(date).endOf("isoWeek");

  return { start: weekStart.toISOString(), end: weekEnd.toISOString() };
};

const calculateMonth = (date: Date): DateRange => {
  const monthStart = moment(date).startOf("month");
  const monthEnd = moment(date).endOf("month");

  return { start: monthStart.toISOString(), end: monthEnd.toISOString() };
};

const PeriodFilter = ({
  children,
  periods = [DataPeriod.Week, DataPeriod.Month],
  defaultPeriod,
}: PeriodFilterProps) => {
  const [dateRange, setDateRange] = useState<DateRange>(
    defaultPeriod === DataPeriod.Week
      ? calculateWeek(new Date())
      : calculateMonth(new Date())
  );
  const [currentPeriod, setCurrentPeriod] = useState<DataPeriod>(defaultPeriod);
  const [date, setDate] = useState<Date>(new Date());

  const isCurrentPeriod =
    currentPeriod === DataPeriod.Week
      ? dateRange.start === moment().startOf("isoWeek").toISOString()
      : dateRange.start === moment().startOf("month").toISOString();

  useEffect(() => {
    const calculateInitialDateRange = () => {
      const range =
        currentPeriod === DataPeriod.Week
          ? calculateWeek(date)
          : calculateMonth(date);

      setDateRange(range);
    };

    calculateInitialDateRange();
  }, [currentPeriod, date]);

  const handleLastPeriod = () => {
    if (currentPeriod === DataPeriod.Week) {
      const lastWeek = moment(date).subtract(1, "weeks");
      setDate(lastWeek.toDate());
    }

    if (currentPeriod === DataPeriod.Month) {
      const lastMonth = moment(date).subtract(1, "month");
      setDate(lastMonth.toDate());
    }
  };

  const handleNextPeriod = () => {
    if (currentPeriod === DataPeriod.Week) {
      const nextWeek = moment(date).add(1, "weeks");
      setDate(nextWeek.toDate());
    }

    if (currentPeriod === DataPeriod.Month) {
      const nextMonth = moment(date).add(1, "months");
      setDate(nextMonth.toDate());
    }
  };

  return (
    <Stack spacing={5}>
      <Box display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Box width="inherit" display="flex" justifyContent="center">
            <ButtonGroup isAttached>
              {periods.map((period) => (
                <Button
                  key={period}
                  onClick={() => setCurrentPeriod(period)}
                  variant={currentPeriod === period ? "solid" : "outline"}
                  aria-pressed={currentPeriod === period}
                  _active={{
                    backgroundColor: theme.colors.brand[300],
                    color: "white",
                  }}
                  _hover={
                    currentPeriod === period
                      ? {
                          backgroundColor: theme.colors.brand[300],
                          color: "white",
                        }
                      : undefined
                  }
                >
                  {period}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns={
              currentPeriod === DataPeriod.Week
                ? "auto 15rem auto"
                : "auto 10rem auto"
            }
            gap={5}
            alignItems="center"
            textAlign="center"
          >
            <IconButton
              variant="outline"
              isRound
              aria-label={`Last ${currentPeriod}`}
              icon={<IoChevronBack />}
              size="sm"
              onClick={handleLastPeriod}
            />
            {dateRange && <Text>{formatDate(dateRange, currentPeriod)}</Text>}
            <IconButton
              variant="outline"
              isRound
              aria-label={`Next ${currentPeriod}`}
              icon={<IoChevronForward />}
              size="sm"
              onClick={handleNextPeriod}
              isDisabled={isCurrentPeriod}
            />
          </Box>
        </Stack>
      </Box>
      {children(dateRange)}
    </Stack>
  );
};

export { PeriodFilter };
