import pg from "../../../../../../db/client";
import { Pet } from "../../schema/objects/Pet";
import getWeightsByPetIdResolver from "./getWeightsByPetIdResolver";

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

    const weights = await getWeightsByPetIdResolver(null, { petId: args.id });

    const pet = new Pet(
      petFromDb.id,
      petFromDb.group_id,
      petFromDb.species,
      petFromDb.name,
      petFromDb.date_of_birth,
      petFromDb.sex,
      petFromDb.fur,
      weights
    );

    return pet;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in getPetByIdResolver:", error);
    throw error;
  }
};

export default getPetByIdResolver;
