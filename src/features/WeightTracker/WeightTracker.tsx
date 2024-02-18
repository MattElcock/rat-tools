"use client";

import { HealthyWeightGuidance } from "@/components/HealthyWeightGuidance";
import { DataPeriod, PeriodFilter } from "@/components/PeriodFilter";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { DataTable } from "./components/DataTable";
import { Graph } from "./components/Graph";
import { IoAddOutline } from "react-icons/io5";
import NextLink from "next/link";

interface Props {
  petId: string;
}

const WeightTracker = ({ petId }: Props) => {
  return (
    <Stack spacing={4}>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="3xl" as="h2">
          Weight Tracker
        </Text>
        <Button
          leftIcon={<IoAddOutline />}
          variant="link"
          size="sm"
          as={NextLink}
          href={`/pets/${petId}/weight-tracker/add`}
        >
          Add Weight
        </Button>
      </Box>
      <PeriodFilter defaultPeriod={DataPeriod.Month}>
        {(dateRange, currentPeriod) => {
          return (
            <Stack spacing={4}>
              <Graph
                petId={petId}
                dateRange={dateRange}
                currentPeriod={currentPeriod}
              />
              <HealthyWeightGuidance />
              <Stack spacing={2}>
                <Heading as="h6" size="sm" fontWeight={500}>
                  Data
                </Heading>
                <DataTable
                  petId={petId}
                  dateRange={dateRange}
                  currentPeriod={currentPeriod}
                />
              </Stack>
            </Stack>
          );
        }}
      </PeriodFilter>
    </Stack>
  );
};

export { WeightTracker };
