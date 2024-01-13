import { PetProfileActions } from "@/features/PetProfileActions";
import { PetSummary } from "@/features/PetSummary";
import { PageProps } from "@/types";
import { Stack } from "@chakra-ui/react";

export default function PetProfile(props: PageProps) {
  const { userId, petId } = props.params;

  return (
    <Stack spacing={5}>
      <PetProfileActions userId={userId} petId={petId} />
      <PetSummary userId={userId} petId={petId} />
    </Stack>
  );
}
