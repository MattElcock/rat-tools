import { useMutation } from "@tanstack/react-query";

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
  try {
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
  } catch (e) {
    throw e;
  }
};

const useCreatePet = () => {
  return useMutation({ mutationFn: createPet });
};

export { useCreatePet };
