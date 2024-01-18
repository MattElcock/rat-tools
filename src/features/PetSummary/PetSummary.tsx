"use client";

import { useGetPetById } from "@/api/pets";
import { Stat } from "@/components/Stat";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import {
  IoMaleFemaleOutline,
  IoCalendarOutline,
  IoScaleOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";

interface PetSummaryProps {
  petId: string;
}

const PetSummary = ({ petId }: PetSummaryProps) => {
  const { isLoading, error, data } = useGetPetById(petId);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const longDateFormatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: undefined,
  });

  return (
    <PageSection title="At a Glance">
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
        <Stat icon={<IoMaleFemaleOutline />} title="Sex" value={data.sex} />
        <Stat
          icon={<IoCalendarOutline />}
          title="Date of Birth"
          value={longDateFormatter.format(new Date(data.dateOfBirth))}
        />
        <Stat
          icon={<IoScaleOutline />}
          title="Latest Weight"
          subtitle={longDateFormatter.format(new Date(data.latestWeight.taken))}
          value={`${data.latestWeight.value} grams`}
        />
        <Stat
          icon={<IoColorPaletteOutline />}
          title="Fur"
          value={data.fur.join(" / ")}
        />
      </Box>
    </PageSection>
  );
};

export { PetSummary };
