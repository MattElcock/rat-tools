import { gql } from "@urql/core";
import { useQuery } from "@urql/next";

const query = gql`
  query ($id: String!) {
    getPetById(id: $id) {
      id
      name
      sex
      latestWeight {
        dateTaken
        value
      }
      fur
    }
  }
`;

const useGetPetById = (id: string) => {
  const [result] = useQuery({ query, variables: { id } });

  return {
    isLoading: result.fetching,
    error: result.error,
    data: result.data?.getPetById,
  };
};

export { useGetPetById };
