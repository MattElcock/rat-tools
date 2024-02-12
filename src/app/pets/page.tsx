import { getClient } from "@/api/client";
import { PetMenu } from "@/features/PetMenu";
import { gql } from "@apollo/client";

export default async function UserHomepage() {
  const query = gql(`
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
  `);

  const { data } = await getClient().query({ query });

  return <PetMenu data={data.groups} />;
}
