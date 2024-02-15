import pg from "../../../../../../db/client";
import { Weight } from "../../schema/objects/Weight";

type ResolverArgs = {
  petId: string;
  from?: string | null;
  to?: string | null;
};

const getWeightsByPetIdResolver = async (
  _parent: any,
  args: ResolverArgs
): Promise<Weight[]> => {
  try {
    const weightsFromDb = await pg("weights")
      .select("*")
      .where({ pet_id: args.petId });

    const weights: Weight[] = weightsFromDb.map((weight: any) => {
      return new Weight(
        weight.id,
        weight.pet_id,
        weight.metric,
        weight.value,
        weight.date_taken
      );
    });

    return weights;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in getWeightsByPetIdResolver:", error);
    throw error;
  }
};

export default getWeightsByPetIdResolver;
