import getClient from "@/utils/getClient";
import { gql } from "@urql/core";

type Pet = {
  name: string;
  sex: "Male" | "Female";
  latestWeight: {
    dateTaken: string;
    value: number;
  };
  fur: string[];
};

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

const useGetPetById = async (id: string): Promise<Pet> => {
  const result = await getClient().query(query, {
    id,
  });

  const data = result.data?.getPetById;

  return data;
};

export { useGetPetById };
