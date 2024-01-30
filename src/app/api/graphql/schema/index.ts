import createGroupResolver from "../resolvers/mutations/createGroupResolver";
import createPetResolver from "../resolvers/mutations/createPetResolver";
import createWeightResolver from "../resolvers/mutations/createWeightResolver";
import getPetByIdResolver from "../resolvers/queries/getPetByIdResolver";
import groupResolver from "../resolvers/queries/groupResolver";
import { builder } from "./builder";
import { Fur } from "./enums/Fur";
import { Metric } from "./enums/Metric";
import { Sex } from "./enums/Sex";
import { Species } from "./enums/Species";
import { Group } from "./objects/Group";
import { Pet } from "./objects/Pet";
import { Weight } from "./objects/Weight";

// Queries
builder.queryType({
  description: "The query root type.",
  fields: (t) => ({
    groups: t.field({
      type: [Group],
      resolve: groupResolver,
    }),
    getPetById: t.field({
      type: Pet,
      args: {
        id: t.arg.string({ required: true }),
      },
      resolve: getPetByIdResolver,
    }),
  }),
});

// Mutations
builder.mutationType({
  fields: (t) => ({
    createGroup: t.field({ type: Group, resolve: createGroupResolver }),
    createPet: t.field({
      type: Pet,
      args: {
        name: t.arg.string({ required: true }),
        species: t.arg({ type: Species, required: true }),
        sex: t.arg({ type: Sex, required: true }),
        fur: t.arg({ type: [Fur], required: true }),
        weightValue: t.arg.int({ required: true }),
        weightDateTaken: t.arg.string({ required: true }),
        weightMetric: t.arg({ type: Metric, required: true }),
      },
      resolve: createPetResolver,
    }),
    createWeight: t.field({
      type: Weight,
      args: {
        value: t.arg.int({ required: true }),
        dateTaken: t.arg.string({ required: true }),
        metric: t.arg({ type: Metric, required: true }),
      },
      resolve: createWeightResolver,
    }),
  }),
});

export default builder.toSchema();
