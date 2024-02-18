import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query GetPetById($id: String!) {
    getPetById(id: $id) {
      id
      name
      dateOfBirth
      sex
      latestWeight {
        dateTaken
        value
      }
      fur
    }
  }
`;

type QueryResponse = {
  getPetById: {
    id: string;
    name: string;
    dateOfBirth: string;
    sex: string;
    latestWeight: {
      dateTaken: string;
      value: number;
    };
    fur: string[];
  };
};

const useGetPetById = (id: string) => {
  const result = useSuspenseQuery<QueryResponse>(query, {
    variables: { id },
  });

  return {
    error: result.error,
    data: {
      ...result.data.getPetById,
    },
  };
};

export { useGetPetById };
