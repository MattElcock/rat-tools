import { gql, useQuery } from "urql";

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

const useListPets = () => {
  const [result] = useQuery({ query });

  return { isLoading: result.fetching, error: result.error, data: result.data };
};

export { useListPets };
