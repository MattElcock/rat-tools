import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query ($id: String!, $from: String, $to: String) {
    getPetById(id: $id) {
      name
    }
    getWeightsByPetId(petId: $id, from: $from, to: $to) {
      value
      dateTaken
    }
  }
`;

type QueryResponse = {
  getPetById: {
    name: string;
  };
  getWeightsByPetId: Array<{ value: string; dateTaken: string }>;
};

const useGetWeightsByPetId = (id: string, from: string, to: string) => {
  const result = useSuspenseQuery<QueryResponse>(query, {
    variables: { id, from, to },
  });

  return {
    error: result.error,
    data: {
      name: result.data.getPetById.name,
      weights: result.data.getWeightsByPetId,
    },
  };
};

export { useGetWeightsByPetId };
