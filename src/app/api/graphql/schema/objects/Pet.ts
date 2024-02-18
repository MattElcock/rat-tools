import getWeightsByPetIdResolver from "../../resolvers/queries/getWeightsByPetIdResolver";
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

  constructor(
    id: string,
    groupId: string,
    species: Species,
    name: string,
    dateOfBirth: string,
    sex: Sex,
    fur: Fur[]
  ) {
    this.id = id;
    this.groupId = groupId;
    this.species = species;
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth).toISOString();
    this.sex = sex;
    this.fur = fur;
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
      resolve: async (parent) => {
        const weights = await getWeightsByPetIdResolver(parent, {
          petId: parent.id,
        });
        weights.sort(
          (a, b) =>
            new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()
        );
        return weights[0];
      },
    }),
    weights: t.field({
      type: [Weight],
      resolve: async (parent) =>
        await getWeightsByPetIdResolver(parent, { petId: parent.id }),
    }),
  }),
});
