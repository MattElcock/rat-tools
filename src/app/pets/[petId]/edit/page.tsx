import { useGetPetById } from "@/api/getPetById";
import { EditPetProfile } from "@/features/EditPetProfile";
import { PageProps } from "@/types";
import { Suspense } from "react";

export default async function EditPetProfilePage(props: PageProps) {
  return (
    <Suspense>
      <EditPetProfile petId={props.params.petId} />
    </Suspense>
  );
}
