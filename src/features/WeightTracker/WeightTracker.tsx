"use client";

import { useGetWeightsByPetId } from "@/api/getWeightsByPetId";
import { DataPeriod, PeriodFilter } from "@/components/PeriodFilter";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";

interface Props {
  petId: string;
}

const Graph = ({ petId }: Props) => {
  const { data, isLoading } = useGetWeightsByPetId(petId);
  return <p>Graph</p>;
};

const WeightTracker = ({ petId }: Props) => {
  const { data, isLoading } = useGetWeightsByPetId(petId);

  if (isLoading || !data) {
    return <p>Loading</p>;
  }

  return (
    <PageSection title="Weight Tracker">
      <Box mt={5}>
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {(dateRange) => {
            return (
              <>
                <Graph petId={petId} />
              </>
            );
          }}
        </PeriodFilter>
      </Box>
    </PageSection>
  );
};

export { WeightTracker };
