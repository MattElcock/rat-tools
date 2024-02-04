"use client";

import { DataPeriod, DateRange, PeriodFilter } from "@/components/PeriodFilter";
import { PageSection } from "@/layouts/PageSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DataTable } from "./components/DataTable";

interface Props {
  petId: string;
  dateRange: DateRange;
  currentPeriod: DataPeriod;
}

const WeightTracker = ({ petId }: Props) => {
  return (
    <PageSection title="Weight Tracker">
      <Box mt={5}>
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {(dateRange, currentPeriod) => {
            return (
              <Stack spacing={5}>
                <Stack spacing={2}>
                  <Heading as="h6" size="sm" fontWeight={500}>
                    Graph
                  </Heading>
                  <p>TODO</p>
                </Stack>
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
      </Box>
    </PageSection>
  );
};

export { WeightTracker };
