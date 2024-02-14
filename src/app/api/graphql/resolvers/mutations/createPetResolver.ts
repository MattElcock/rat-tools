import { Fur } from "../../schema/enums/Fur";
import { Metric } from "../../schema/enums/Metric";
import { Sex } from "../../schema/enums/Sex";
import { Species } from "../../schema/enums/Species";
import { Pet } from "../../schema/objects/Pet";
import { Weight } from "../../schema/objects/Weight";
import { v4 } from "uuid";

export type createPetResolverArgs = {
  name: string;
  species: Species;
  sex: Sex;
  dateOfBirth: string;
  fur: Fur[];
  weightValue: number;
  weightDateTaken: string;
  weightMetric: Metric;
};

const createPetResolver = (_parent: any, args: createPetResolverArgs) => {
  const weight = new Weight(
    args.weightMetric,
    args.weightValue,
    args.weightDateTaken
  );

  const uuid = v4();
  const CreatedPet = new Pet(
    uuid,
    args.species,
    args.name,
    args.dateOfBirth,
    args.sex,
    args.fur,
    [weight]
  );

  return CreatedPet;
};

export default createPetResolver;
