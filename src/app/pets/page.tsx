import { getClient } from "@/api/client";
import { PetMenu } from "@/features/PetMenu";
import { gql } from "@apollo/client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function UserHomepage() {
  const query = gql(`
    query {
      groups {
        pets {
          id
          name
        }
      }
    }
  `);

  const { data } = await getClient().query({ query });

  return (
    <Suspense>
      <PetMenu />
    </Suspense>
  );
}
