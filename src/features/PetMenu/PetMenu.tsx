"use client";

import { useListGroups } from "@/api/listGroups";
import { AvatarLink } from "@/components/AvatarLink";
import { SkeletonAvatarLink } from "@/components/AvatarLink/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

const PetMenu = () => {
  const { data, isLoading } = useListGroups();
  const pets: any = data?.groups[0].pets;

  return (
    <PageSection title="Your Mischief">
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        columnGap={2}
        rowGap={5}
      >
        {isLoading && (
          <>
            <SkeletonAvatarLink />
            <SkeletonAvatarLink />
            <SkeletonAvatarLink />
          </>
        )}
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
