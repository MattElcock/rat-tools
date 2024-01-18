"use client";

import { Avatar, Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useGetPetById } from "@/api/pets";
import { usePathname } from "next/navigation";

interface PetProfileActionsProps {
  petId: string;
}

const PetProfileActions = ({ petId }: PetProfileActionsProps) => {
  const path = usePathname();
  const { isLoading, error, data } = useGetPetById(petId);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
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
          <Link as={NextLink} href={`${path}/edit`} color="teal.500">
            Edit Profile
          </Link>
          <Link as={NextLink} href={`${path}/share`} color="teal.500">
            Share Profile
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { PetProfileActions };
