import mockData from "../../mocks/group.json";
import { Fur } from "../../schema/enums/Fur";
import { Metric } from "../../schema/enums/Metric";
import { Sex } from "../../schema/enums/Sex";
import { Species } from "../../schema/enums/Species";
import { Pet } from "../../schema/objects/Pet";
import { Weight } from "../../schema/objects/Weight";

type resolverArgs = {
  id: string;
};

const getPetByIdResolver = (_parent: any, args: resolverArgs) => {
  const json = mockData;
  const data = json[0].pets.find((pet) => pet.id === args.id);

  if (!data) {
    throw new Error();
  }

  const weights = data.weights.map(
    (weight) =>
      new Weight(
        weight.metric as Metric,
        weight.value,
        new Date(weight.dateTaken)
      )
  );

  return new Pet(
    data.id,
    Species.Rat,
    data.name,
    data.sex as Sex,
    data.fur as Fur[],
    weights
  );
};

export default getPetByIdResolver;
