import { useGetPetById } from "@/api/getPetById";
import { EditPetProfile } from "@/features/EditPetProfile";
import { PageProps } from "@/types";

export default async function EditPetProfilePage(props: PageProps) {
  const data = await useGetPetById(props.params.petId);

  return <EditPetProfile data={data} />;
}
