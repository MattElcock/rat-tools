"use client";

import { AvatarLink } from "@/components/AvatarLink";
import { Pet } from "@/types";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { IoAdd } from "react-icons/io5";

interface ListProps {
  pets: Pet[];
}

const List = ({ pets }: ListProps) => {
  const path = usePathname();

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {pets.map((pet) => (
        <AvatarLink key={pet.id} href={`${path}/${pet.id}`} text={pet.name} />
      ))}
      <AvatarLink href={`${path}/new-pet`} text="Add a Rat" icon={<IoAdd />} />
    </Box>
  );
};

export { List };
