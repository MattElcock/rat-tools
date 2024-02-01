import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";

export default function PetProfilePage(props: PageProps) {
  return <PetProfile petId={props.params.petId} />;
}
