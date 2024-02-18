import { UpdatePetResolverArgs } from "@/app/api/graphql/resolvers/mutations/updatePetResolver";
import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation UpdatePet(
    $id: String!
    $name: String!
    $dateOfBirth: String!
    $fur: [Fur!]!
    $sex: Sex!
  ) {
    updatePet(
      id: $id
      name: $name
      dateOfBirth: $dateOfBirth
      fur: $fur
      sex: $sex
    ) {
      id
    }
  }
`;

interface UseUpdatePet {
  onSuccess: (id: string) => void;
}

const useUpdatePet = ({ onSuccess }: UseUpdatePet) => {
  const [mutateFunction, mutationResult] = useMutation(mutation);

  const execute = async (data: UpdatePetResolverArgs) => {
    const result = await mutateFunction({
      variables: {
        id: data.id,
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        fur: data.fur,
        sex: data.sex,
      },
      refetchQueries: ["GetPetById"],
    });

    if (result.data.updatePet.id) {
      onSuccess(result.data.updatePet.id);
    }

    return data;
  };

  return {
    execute,
    loading: mutationResult.loading,
    error: mutationResult.error,
  };
};

export { useUpdatePet };
