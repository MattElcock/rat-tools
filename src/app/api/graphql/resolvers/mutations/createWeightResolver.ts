import { v4 } from "uuid";
import { Metric } from "../../schema/enums/Metric";
import { Weight } from "../../schema/objects/Weight";
import pg from "../../../../../../db/client";

export type CreateWeightResolverArgs = {
  petId: string;
  value: number;
  dateTaken: string;
  metric: Metric;
};

const createWeightResolver = async (
  _parent: any,
  args: CreateWeightResolverArgs
) => {
  try {
    const weightId = v4();

    const createdWeight = new Weight(
      weightId,
      args.petId,
      args.metric,
      args.value,
      args.dateTaken
    );

    await pg("weights").insert({
      id: createdWeight.id,
      pet_id: createdWeight.petId,
      date_taken: createdWeight.dateTaken,
      value: createdWeight.value,
      metric: createdWeight.metric,
    });

    return createdWeight;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in createWeightResolver:", error);
    throw error;
  }
};

export default createWeightResolver;
