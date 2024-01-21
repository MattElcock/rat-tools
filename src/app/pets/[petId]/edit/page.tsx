import { getPetByIdPrefetch } from "@/api/pets";
import { EditPetProfile } from "@/features/EditPetProfile";
import { PageProps } from "@/types";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default function EditPetProfilePage(props: PageProps) {
  const { petId } = props.params;
  const petsByIdQuery = getPetByIdPrefetch(petId);

  return (
    <HydrationBoundary state={dehydrate(petsByIdQuery)}>
      <EditPetProfile petId={petId} />
    </HydrationBoundary>
  );
}
