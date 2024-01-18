import { PetProfileActions } from "@/features/PetProfileActions";
import { PetSummary } from "@/features/PetSummary";
import { PageProps } from "@/types";
import { Stack } from "@chakra-ui/react";

export default function PetProfile(props: PageProps) {
  const { petId } = props.params;

  return (
    <Stack spacing={5}>
      <PetProfileActions petId={petId} />
      <PetSummary petId={petId} />
    </Stack>
  );
}
