import { PetProfileActions } from "@/features/PetProfileActions";
import { PageProps } from "@/types";
import { Stack } from "@chakra-ui/react";

export default function PetProfile(props: PageProps) {
  const petId = props.params.petId;

  return (
    <Stack>
      <PetProfileActions petId={petId} />
    </Stack>
  );
}
