import { Pet } from "./Pet";
import { builder } from "../builder";
import getPetsByGroupIdResolver from "../../resolvers/queries/getPetsByGroupId";

export class Group {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

builder.objectType(Group, {
  name: "Group",
  description: "A group of pets",
  fields: (t) => ({
    id: t.exposeID("id"),
    pets: t.field({
      type: [Pet],
      resolve: async (parent) =>
        await getPetsByGroupIdResolver(parent, { id: parent.id }),
    }),
  }),
});
