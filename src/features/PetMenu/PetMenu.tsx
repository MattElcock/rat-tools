"use client";

import { useListPets } from "@/api/listPets";
import { AvatarLink } from "@/components/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

const PetMenu = () => {
  const { data } = useListPets();
  const pets: any = data?.groups[0].pets;

  return (
    <PageSection title="Your Mischief">
      <Box display="flex" flexWrap="wrap" gap={5}>
        {pets.length > 0 &&
          pets.map((pet: any) => (
            <AvatarLink key={pet.id} href={`/pets/${pet.id}`} text={pet.name} />
          ))}
        <AvatarLink href="/pets/new-pet" text="Add a Rat" icon={<IoAdd />} />
      </Box>
    </PageSection>
  );
};

export { PetMenu };
