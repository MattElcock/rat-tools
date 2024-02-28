"use client";

import { useListPets } from "@/api/root/listPets";
import { AvatarLink } from "@/components/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

const PetMenu = () => {
  const { data } = useListPets();

  return (
    <PageSection title="Your Mischief">
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        columnGap={2}
        rowGap={5}
      >
        {data.length > 0 &&
          data.map((pet) => (
            <AvatarLink key={pet.id} href={`/pets/${pet.id}`} text={pet.name} />
          ))}
        <AvatarLink href="/pets/new-pet" text="New Pet" icon={<IoAdd />} />
      </Box>
    </PageSection>
  );
};

export { PetMenu };
