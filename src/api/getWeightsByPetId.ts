import { gql } from "@urql/core";
import { useQuery } from "@urql/next";

const query = gql`
  query ($id: String!) {
    getPetById(id: $id) {
      weights {
        dateTaken
        value
      }
    }
  }
`;

const useGetWeightsByPetId = (id: string) => {
  const [result] = useQuery({ query, variables: { id } });

  return {
    isLoading: result.fetching,
    error: result.error,
    data: result.data?.getPetById,
  };
};

export { useGetWeightsByPetId };
