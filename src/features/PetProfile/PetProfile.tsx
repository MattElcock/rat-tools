import { Stat } from "@/components/Stat";
import { PageSection } from "@/layouts/PageSection";
import { Avatar, Box, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  IoCalendarOutline,
  IoColorPaletteOutline,
  IoMaleFemaleOutline,
  IoScaleOutline,
} from "react-icons/io5";

interface PetProfileProps {
  data: any;
}

const PetProfile = ({ data }: PetProfileProps) => {
  const longDateFormatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: undefined,
  });

  return (
    <Stack spacing={5}>
      <Box
        display="grid"
        gridTemplateColumns="auto 1fr"
        gap={3}
        alignItems="center"
      >
        <Avatar size="xl" />
        <Box>
          <Text fontSize="3xl" as="h2">
            {data.name}
          </Text>
          <Box display="flex" gap={3}>
            <Link as={NextLink} href={`/pets/${data.id}/edit`} color="teal.500">
              Edit Profile
            </Link>
          </Box>
        </Box>
      </Box>
      <PageSection title="At a Glance">
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
          <Stat icon={<IoMaleFemaleOutline />} title="Sex" value={data.sex} />
          <Stat
            icon={<IoCalendarOutline />}
            title="Date of Birth"
            value={longDateFormatter.format(new Date("11/11/11"))}
          />
          <Stat
            icon={<IoScaleOutline />}
            title="Latest Weight"
            subtitle={longDateFormatter.format(
              new Date(data.latestWeight.dateTaken)
            )}
            value={`${data.latestWeight.value} grams`}
          />
          <Stat
            icon={<IoColorPaletteOutline />}
            title="Fur"
            value={data.fur.join(" / ")}
          />
        </Box>
      </PageSection>
    </Stack>
  );
};

export { PetProfile };
