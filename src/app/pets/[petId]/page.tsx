import { getPetByIdPrefetch } from "@/api/pets";
import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default function PetProfilePage(props: PageProps) {
  const { petId } = props.params;
  const petsByIdQuery = getPetByIdPrefetch(petId);

  return (
    <HydrationBoundary state={dehydrate(petsByIdQuery)}>
      <PetProfile petId={petId} />
    </HydrationBoundary>
  );
}
