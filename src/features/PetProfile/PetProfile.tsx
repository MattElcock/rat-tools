"use client";

import { CallToAction } from "@/components/CallToAction";
import { Stat } from "@/components/Stat";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  IoCalendarOutline,
  IoColorPaletteOutline,
  IoMaleFemaleOutline,
  IoScaleOutline,
  IoThermometerOutline,
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
    <Stack spacing={7}>
      <Box>
        <Text fontSize="4xl" as="h2">
          {data.name}
        </Text>
        <Box display="flex" gap={3}>
          <Link as={NextLink} href={`/pets/${data.id}/edit`}>
            Edit Profile
          </Link>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
        <Stat icon={<IoMaleFemaleOutline />} title="Sex" value={data.sex} />
        <Stat
          icon={<IoCalendarOutline />}
          title="Date of Birth"
          value={longDateFormatter.format(new Date(data.dateOfBirth))}
        />

        <Stat
          icon={<IoColorPaletteOutline />}
          title="Fur"
          value={data.fur.join(" / ")}
        />
        <Stat
          icon={<IoScaleOutline />}
          title="Latest Weight"
          subtitle={longDateFormatter.format(
            new Date(data.latestWeight.dateTaken)
          )}
          value={`${data.latestWeight.value} grams`}
        />
      </Box>
      <CallToAction
        href={`/pets/${data.id}/weight-tracker`}
        icon={<IoScaleOutline />}
        title={`Track ${data.name}'s weight`}
        text="This helps you and your vet recognize sickness earlier and track
                recovery over time."
      />
      <CallToAction
        href="#"
        icon={<IoThermometerOutline />}
        title={`Track ${data.name}'s symptoms`}
        text="This helps you and your vet recognize new symptoms and track the development of existing ones."
      />
    </Stack>
  );
};

export { PetProfile };
