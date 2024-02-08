"use client";

import { useGetWeightsByPetId } from "@/api/getWeightsByPetId";
import theme from "@/app/theme";
import { DataPeriod, DateRange } from "@/components/PeriodFilter";
import { Box, Heading, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import moment from "moment";
import dynamic from "next/dynamic";
import { IoAnalyticsOutline } from "react-icons/io5";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface GraphProps {
  petId: string;
  dateRange: DateRange;
  currentPeriod: DataPeriod;
}

const NotEnoughReadings = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pb={3}>
      <IoAnalyticsOutline fontSize={75} />
      <Heading size="sm" mb={2} fontWeight={500}>
        There is not enough data to draw the graph
      </Heading>
      <Text textAlign="center" mb={1} fontSize="sm">
        Our rats need at least 3 readings for your chosen date range to draw the
        graph. Please try another date range or come back when you have taken
        more readings.
      </Text>
    </Box>
  );
};

const Graph = ({ petId, dateRange, currentPeriod }: GraphProps) => {
  const { data, isLoading } = useGetWeightsByPetId(
    petId,
    dateRange.start,
    dateRange.end
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!data.weights || data.weights.length < 3) {
    return <NotEnoughReadings />;
  }

  const chartData = data.weights.map((weight: any) => [
    new Date(weight.dateTaken),
    weight.value,
  ]);

  const options: ApexOptions = {
    colors: [theme.colors.primary],
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      title: {
        text: "Day",
        style: {
          fontWeight: 100,
        },
      },
      type: "datetime",
      labels: {
        formatter: (_value, timestamp, _opts) => {
          return moment(timestamp).format(
            currentPeriod === DataPeriod.Custom ? "D MMM" : "Do"
          );
        },
      },
      tooltip: {
        formatter: (value) => {
          return moment(value).format(
            currentPeriod === DataPeriod.Custom ? "dddd, Do MMMM" : "dddd Do"
          );
        },
      },
    },
    yaxis: {
      stepSize: 10,
      title: {
        text: "Weight (Grams)",
        style: {
          fontWeight: 100,
        },
      },
    },
    markers: {
      size: 5,
      colors: theme.colors.link,
    },
  };

  const series = [
    {
      name: data.name,
      data: chartData,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height="300"
    />
  );
};

export { Graph };
