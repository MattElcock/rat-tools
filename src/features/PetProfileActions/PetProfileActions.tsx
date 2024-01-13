import { Avatar, Box, Text, Link } from "@chakra-ui/react";
import { Actions } from "./components/Actions";

interface PetProfileActionsProps {
  petId: string;
}

const PetProfileActions = ({ petId }: PetProfileActionsProps) => {
  const data = {
    id: petId,
    name: "Biscoff",
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="auto 1fr"
      gap={3}
      alignItems="center"
    >
      <Avatar size="xl" />
      <Box>
        <Text fontSize="3xl" as="h3">
          {data.name}
        </Text>
        <Actions />
      </Box>
    </Box>
  );
};

export { PetProfileActions };
