import { EditPetProfile } from "@/features/EditPetProfile";
import { PageProps } from "@/types";

export default async function EditPetProfilePage(props: PageProps) {
  return <EditPetProfile petId={props.params.petId} />;
}
