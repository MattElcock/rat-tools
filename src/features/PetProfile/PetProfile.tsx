"use client";

import { useGetPetById } from "@/api/pets";
import { Stat } from "@/components/Stat";
import { PageSection } from "@/layouts/PageSection";
import { Avatar, Box, Link, Spinner, Stack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import {
  IoMaleFemaleOutline,
  IoCalendarOutline,
  IoScaleOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";
import NextLink from "next/link";

interface PetProfileProps {
  petId: string;
}

const PetProfile = ({ petId }: PetProfileProps) => {
  const { isLoading, data: response } = useGetPetById(petId);
  const path = usePathname();

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={5}
        mt={10}
      >
        <Spinner size="xl" />
        <Text>Loading profile...</Text>
      </Box>
    );
  }

  const longDateFormatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: undefined,
  });

  const data = response.data.attributes;
  const latestWeight = data.weights.data[0].attributes;

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
            {response.data.attributes.name}
          </Text>
          <Box display="flex" gap={3}>
            <Link as={NextLink} href={`${path}/edit`} color="teal.500">
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
            value={longDateFormatter.format(new Date(data.dateOfBirth))}
          />
          <Stat
            icon={<IoScaleOutline />}
            title="Latest Weight"
            subtitle={longDateFormatter.format(new Date(latestWeight.taken))}
            value={`${latestWeight.reading} grams`}
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
