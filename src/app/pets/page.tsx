import { PetMenu } from "@/features/PetMenu";
import getClient from "@/utils/getClient";
import { Stack } from "@chakra-ui/react";
import { gql } from "@urql/core";

const query = gql`
  query {
    groups {
      pets {
        id
        name
        latestWeight {
          value
          dateTaken
          metric
        }
      }
    }
  }
`;

export default async function UserHomepage() {
  const result = await getClient().query(query, {});
  const data = result.data.groups[0].pets;

  return (
    <Stack>
      <PetMenu data={data} />
    </Stack>
  );
}
