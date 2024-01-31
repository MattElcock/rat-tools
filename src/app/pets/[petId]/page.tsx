import { useGetPetById } from "@/api/getPetById";
import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";
import { Suspense } from "react";

export default function PetProfilePage(props: PageProps) {
  return <PetProfile petId={props.params.petId} />;
}
