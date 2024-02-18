import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query ListPets {
    groups {
      pets {
        id
        name
      }
    }
  }
`;

type QueryResponse = {
  groups: [
    {
      pets: [
        {
          id: string;
          name: string;
        }
      ];
    }
  ];
};

const useListPets = () => {
  const result = useSuspenseQuery<QueryResponse>(query);

  return {
    error: result.error,
    data: result.data.groups[0].pets,
  };
};

export { useListPets };
