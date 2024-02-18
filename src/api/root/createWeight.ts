import { CreateWeightResolverArgs } from "@/app/api/graphql/resolvers/mutations/createWeightResolver";
import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreateWeight(
    $petId: String!
    $value: Int!
    $dateTaken: String!
    $metric: Metric!
  ) {
    createWeight(
      petId: $petId
      value: $value
      dateTaken: $dateTaken
      metric: $metric
    ) {
      value
    }
  }
`;

interface UseCreateWeight {
  onSuccess: () => void;
}

const useCreateWeight = ({ onSuccess }: UseCreateWeight) => {
  const [mutateFunction, mutationResult] = useMutation(mutation);

  const execute = async (data: CreateWeightResolverArgs) => {
    const result = await mutateFunction({
      variables: {
        petId: data.petId,
        value: data.value,
        dateTaken: data.dateTaken,
        metric: "Grams",
      },
      refetchQueries: ["GetWeightsByPetId", "GetPetById"],
    });

    console.log(result);

    if (result.data.createWeight.value) {
      onSuccess();
    }

    return data;
  };

  return {
    execute,
    loading: mutationResult.loading,
    error: mutationResult.error,
  };
};

export { useCreateWeight };
