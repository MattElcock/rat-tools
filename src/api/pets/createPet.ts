import { useMutation, useQueryClient } from "@tanstack/react-query";
import { all } from "./keys";

interface CreatePetData {
  name: string;
  sex: string;
  dateOfBirth: string;
  fur: string[];
  weight: {
    taken: string;
    reading: number;
  };
}

const createPet = async (data: CreatePetData) => {
  const petResponse = await fetch("http://localhost:3000/api/pets", {
    method: "POST",
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

  const petJson = await petResponse.json();

  await fetch("http://localhost:3000/api/weights", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        taken: data.weight.taken,
        reading: data.weight.reading,
        pet: {
          connect: [
            {
              id: petJson.data.id,
              position: {
                end: true,
              },
            },
          ],
        },
      },
    }),
  });
};

interface UseCreatePet {
  onSuccess?: (data: void, variables: CreatePetData, context: unknown) => void;
}

const useCreatePet = (options?: UseCreatePet) => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: createPet,
    onSuccess: (data, variables, context) => {
      client.invalidateQueries({ queryKey: all }).then(() => {
        options?.onSuccess?.(data, variables, context);
      });
    },
  });
};

export { useCreatePet };
