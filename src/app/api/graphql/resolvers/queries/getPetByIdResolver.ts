import pg from "../../../../../../db/client";
import { Pet } from "../../schema/objects/Pet";

type ResolverArgs = {
  id: string;
};

const getPetByIdResolver = async (
  _parent: any,
  args: ResolverArgs
): Promise<Pet> => {
  try {
    const petFromDb = await pg("pets")
      .select("*")
      .where({ id: args.id })
      .first();

    const pet = new Pet(
      petFromDb.id,
      petFromDb.group_id,
      petFromDb.species,
      petFromDb.name,
      petFromDb.date_of_birth,
      petFromDb.sex,
      petFromDb.fur
    );

    return pet;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in getPetByIdResolver:", error);
    throw error;
  }
};

export default getPetByIdResolver;
