import { Pet } from "./Pet";
import { builder } from "../builder";

export class Group {
  id: string;
  pets: Pet[];

  constructor(id: string, pets: Pet[]) {
    this.id = id;
    this.pets = pets;
  }
}

builder.objectType(Group, {
  name: "Group",
  description: "A group of pets",
  fields: (t) => ({
    id: t.exposeID("id"),
    pets: t.field({
      type: [Pet],
      resolve: (parent) => parent.pets,
    }),
  }),
});
