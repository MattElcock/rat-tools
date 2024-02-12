"use client";

import { AvatarLink } from "@/components/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

interface PetMenuProps {
  data: any[];
}

const PetMenu = ({ data }: PetMenuProps) => {
  const pets: any = data[0].pets;

  return (
    <PageSection title="Your Mischief">
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        columnGap={2}
        rowGap={5}
      >
        {pets?.length > 0 &&
          pets.map((pet: any) => (
            <AvatarLink key={pet.id} href={`/pets/${pet.id}`} text={pet.name} />
          ))}
        <AvatarLink href="/pets/new-pet" text="Add a Rat" icon={<IoAdd />} />
      </Box>
    </PageSection>
  );
};

export { PetMenu };
