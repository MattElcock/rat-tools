import { useGetPetById } from "@/api/getPetById";
import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";

export default async function PetProfilePage(props: PageProps) {
  const data = await useGetPetById(props.params.petId);

  return <PetProfile data={data} />;
}
