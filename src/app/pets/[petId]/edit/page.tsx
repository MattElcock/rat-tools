import { getClient } from "@/api/client";
import { EditPetProfile } from "@/features/EditPetProfile";
import { PageProps } from "@/types";
import { gql } from "@apollo/client";

export default async function EditPetProfilePage(props: PageProps) {
  const query = gql(`
  query ($id: String!) {
    getPetById(id: $id) {
      id
      name
      dateOfBirth
      sex
      latestWeight {
        dateTaken
        value
      }
      fur
    }
  }
  `);

  const { data } = await getClient().query({
    query,
    variables: { id: props.params.petId },
  });

  return <EditPetProfile data={data.getPetById} />;
}
