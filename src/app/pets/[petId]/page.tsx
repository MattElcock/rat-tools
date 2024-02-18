import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";
import { Suspense } from "react";

export default async function PetProfilePage(props: PageProps) {
  return (
    <Suspense>
      <PetProfile petId={props.params.petId} />
    </Suspense>
  );
}
