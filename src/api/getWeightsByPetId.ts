import { gql } from "@urql/core";
import { useQuery } from "@urql/next";

const query = gql`
  query ($id: String!, $from: String, $to: String) {
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
    data: result.data?.getWeightsByPetId,
  };
};

export { useGetWeightsByPetId };
