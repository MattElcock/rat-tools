import mockData from "../../mocks/group.json";
import { Metric } from "../../schema/enums/Metric";
import { Weight } from "../../schema/objects/Weight";

type ResolverArgs = {
  petId: string;
  from?: string | null;
  to?: string | null;
};

const getWeightsByPetIdResolver = (_parent: any, args: ResolverArgs) => {
  const json = mockData;
  const data = json[0].pets.find((pet) => pet.id === args.petId);

  if (!data) {
    throw new Error("Pet not found");
  }

  const weights = data.weights;
  const filteredWeights = weights.filter((weight) => {
    const date = new Date(weight.dateTaken).getTime();
    const from = args.from ? new Date(args.from).getTime() : null;
    const to = args.to ? new Date(args.to).getTime() : null;

    return (!from || date >= from) && (!to || date <= to);
  });

  const mappedWeights = filteredWeights.map(
    (weight) =>
      new Weight(weight.metric as Metric, weight.value, weight.dateTaken)
  );

  return mappedWeights;
};

export default getWeightsByPetIdResolver;
