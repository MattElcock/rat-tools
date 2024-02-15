import { builder } from "../builder";
import { Fur } from "../enums/Fur";
import { Sex } from "../enums/Sex";
import { Species } from "../enums/Species";
import { Weight } from "./Weight";

export class Pet {
  id: string;
  groupId: string;
  species: Species;
  name: string;
  dateOfBirth: string;
  sex: Sex;
  fur: Fur[];
  weights: Weight[];

  constructor(
    id: string,
    groupId: string,
    species: Species,
    name: string,
    dateOfBirth: string,
    sex: Sex,
    fur: Fur[],
    weights: Weight[]
  ) {
    this.id = id;
    this.groupId = groupId;
    this.species = species;
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth).toISOString();
    this.sex = sex;
    this.fur = fur;
    this.weights = weights;
  }
}

builder.objectType(Pet, {
  name: "Pet",
  description: "A pet",
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    species: t.field({ type: Species, resolve: (parent) => parent.species }),
    sex: t.field({ type: Sex, resolve: (parent) => parent.sex }),
    dateOfBirth: t.exposeString("dateOfBirth"),
    fur: t.field({ type: [Fur], resolve: (parent) => parent.fur }),
    latestWeight: t.field({
      type: Weight,
      resolve: (parent) => {
        const weights = parent.weights;
        weights.sort(
          (a, b) =>
            new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()
        );
        return weights[0];
      },
    }),
    weights: t.field({
      type: [Weight],
      resolve: (parent) => parent.weights,
    }),
  }),
});
