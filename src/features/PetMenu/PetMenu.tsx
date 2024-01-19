"use client";

import { useGetPets } from "@/api/pets";
import { AvatarLink } from "@/components/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { IoAdd } from "react-icons/io5";

const PetMenu = () => {
  const path = usePathname();
  const { data, isLoading, error } = useGetPets();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <PageSection title="Your Mischief">
      <Box display="flex" flexWrap="wrap" gap={5}>
        {data.map((pet: any) => (
          <AvatarLink key={pet.id} href={`${path}/${pet.id}`} text={pet.name} />
        ))}
        <AvatarLink
          href={`${path}/new-pet`}
          text="Add a Rat"
          icon={<IoAdd />}
        />
      </Box>
    </PageSection>
  );
};

export { PetMenu };
