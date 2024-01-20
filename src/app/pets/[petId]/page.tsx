import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";
import { Stack } from "@chakra-ui/react";

export default function PetProfilePage(props: PageProps) {
  const { petId } = props.params;

  return <PetProfile petId={petId} />;
}
