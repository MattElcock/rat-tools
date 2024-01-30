import { PetMenu } from "@/features/PetMenu";
import { gql } from "@urql/core";
import { Suspense } from "react";

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
  return (
    <Suspense>
      <PetMenu />
    </Suspense>
  );
}
