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
  userId: string;
  petId: string;
}

const PetSummary = ({ userId, petId }: PetSummaryProps) => {
  const data = {
    sex: "Male",
    dateOfBirth: "11th Aug, 2020",
    latestWeight: { taken: "11th Aug, 2020", value: 567 },
    fur: ["White", "Cream"],
  };

  return (
    <PageSection title="At a Glance">
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
        <Stat icon={<IoMaleFemaleOutline />} title="Sex" value={data.sex} />
        <Stat
          icon={<IoCalendarOutline />}
          title="Date of Birth"
          value={data.dateOfBirth}
        />
        <Stat
          icon={<IoScaleOutline />}
          title="Latest Weight"
          subtitle={data.latestWeight.taken}
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
