import { useMutation, useQueryClient } from "@tanstack/react-query";
import { all, detail } from "./keys";

interface UpdatePetData {
  name: string;
  sex: string;
  dateOfBirth: string;
  fur: string[];
}

interface UseUpdatePet {
  onSuccess?: (data: void, variables: UpdatePetData, context: unknown) => void;
}

const useUpdatePet = (petId: string, options?: UseUpdatePet) => {
  const client = useQueryClient();

  const updatePet = async (data: UpdatePetData) => {
    await fetch(`http://localhost:3000/api/pets/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          sex: data.sex,
          dateOfBirth: data.dateOfBirth,
          fur: data.fur,
        },
      }),
    });
  };

  return useMutation({
    mutationFn: updatePet,
    onSuccess: (data, variables, context) => {
      client.invalidateQueries({ queryKey: detail(petId) }).then(() => {
        options?.onSuccess?.(data, variables, context);
      });
    },
  });
};

export { useUpdatePet };
