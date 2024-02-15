import { CreatePetResolverArgs } from "@/app/api/graphql/resolvers/mutations/createPetResolver";
import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreatePet(
    $name: String!
    $dateOfBirth: String!
    $fur: [Fur!]!
    $sex: Sex!
    $species: Species!
    $weightDateTaken: String!
    $weightMetric: Metric!
    $weightValue: Int!
  ) {
    createPet(
      name: $name
      dateOfBirth: $dateOfBirth
      fur: $fur
      sex: $sex
      species: $species
      weightDateTaken: $weightDateTaken
      weightMetric: $weightMetric
      weightValue: $weightValue
    ) {
      id
    }
  }
`;

interface UseCreatePet {
  onSuccess: (id: string) => void;
}

const useCreatePet = ({ onSuccess }: UseCreatePet) => {
  const [mutateFunction, mutationResult] = useMutation(mutation);

  const execute = async (data: CreatePetResolverArgs) => {
    const result = await mutateFunction({
      variables: {
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        fur: data.fur,
        sex: data.sex,
        species: "Rat",
        weightDateTaken: data.weightDateTaken,
        weightValue: data.weightValue,
        weightMetric: "Grams",
      },
    });

    if (result.data.createPet.id) {
      onSuccess(result.data.createPet.id);
    }

    return data;
  };

  return {
    execute,
    loading: mutationResult.loading,
    error: mutationResult.error,
  };
};

export { useCreatePet };
