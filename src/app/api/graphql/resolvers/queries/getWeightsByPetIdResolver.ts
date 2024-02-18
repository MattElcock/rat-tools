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
    let query = pg("weights").select("*").where({ pet_id: args.petId });

    if (args.from) {
      query = query.where("date_taken", ">=", args.from);
    }
    if (args.to) {
      query = query.where("date_taken", "<=", args.to);
    }

    const weightsFromDb = await query.orderBy("date_taken", "desc");

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
