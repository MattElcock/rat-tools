import { gql } from "@urql/core";
import { useQuery } from "@urql/next";

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

const useGetWeightsByPetId = (id: string, from: string, to: string) => {
  const [result] = useQuery({ query, variables: { id, from, to } });

  return {
    isLoading: result.fetching,
    error: result.error,
    data: {
      name: result.data?.getPetById.name,
      weights: result.data?.getWeightsByPetId,
    },
  };
};

export { useGetWeightsByPetId };
