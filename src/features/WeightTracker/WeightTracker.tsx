"use client";

import { DataPeriod, PeriodFilter } from "@/components/PeriodFilter";
import { PageSection } from "@/layouts/PageSection";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { DataTable } from "./components/DataTable";
import { Graph } from "./components/Graph";

interface Props {
  petId: string;
}

const WeightTracker = ({ petId }: Props) => {
  return (
    <PageSection title="Weight Tracker">
      <Box mt={5}>
        <PeriodFilter defaultPeriod={DataPeriod.Month}>
          {(dateRange, currentPeriod) => {
            return (
              <Stack spacing={4}>
                <Stack spacing={2}>
                  <Heading as="h6" size="sm" fontWeight={500}>
                    Graph
                  </Heading>
                  <Graph
                    petId={petId}
                    dateRange={dateRange}
                    currentPeriod={currentPeriod}
                  />
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
