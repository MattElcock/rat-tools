import { AvatarLink } from "@/components/AvatarLink";
import { PageSection } from "@/layouts/PageSection";
import { Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

const PetMenu = ({ data }: any) => {
  return (
    <PageSection title="Your Mischief">
      <Box display="flex" flexWrap="wrap" gap={5}>
        {data?.length > 0 &&
          data.map((pet: any) => (
            <AvatarLink key={pet.id} href={`/pets/${pet.id}`} text={pet.name} />
          ))}
        <AvatarLink href="/pets/new-pet" text="Add a Rat" icon={<IoAdd />} />
      </Box>
    </PageSection>
  );
};

export { PetMenu };
