import pg from "../../../../../../db/client";
import { Pet } from "../../schema/objects/Pet";

type ResolverArgs = {
  id: string;
};

const getPetsByGroupIdResolver = async (
  _parent: any,
  args: ResolverArgs
): Promise<Pet[]> => {
  try {
    const petsFromDb = await pg("pets")
      .select("*")
      .where({ group_id: args.id });

    const pets = petsFromDb.map(
      (pet: any) =>
        new Pet(
          pet.id,
          pet.group_id,
          pet.species,
          pet.name,
          pet.date_of_birth,
          pet.sex,
          pet.fur
        )
    );

    return pets;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in getPetsByGroupIdResolver:", error);
    throw error;
  }
};

export default getPetsByGroupIdResolver;
