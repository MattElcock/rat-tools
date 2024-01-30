import mockData from "../../mocks/group.json";
import { Fur } from "../../schema/enums/Fur";
import { Metric } from "../../schema/enums/Metric";
import { Sex } from "../../schema/enums/Sex";
import { Species } from "../../schema/enums/Species";
import { Group } from "../../schema/objects/Group";
import { Pet } from "../../schema/objects/Pet";
import { Weight } from "../../schema/objects/Weight";

const groupResolver = (_parent: any, _args: any) => {
  const json = mockData;

  const group = json.map((item) => {
    const pets = item.pets.map((pet) => {
      const weights = pet.weights.map(
        (weight) =>
          new Weight(
            weight.metric as Metric,
            weight.value,
            new Date(weight.dateTaken)
          )
      );

      return new Pet(
        pet.id,
        Species.Rat,
        pet.name,
        pet.sex as Sex,
        pet.fur as Fur[],
        weights
      );
    });

    return new Group(item.id, pets);
  });

  return group;
};

export default groupResolver;
