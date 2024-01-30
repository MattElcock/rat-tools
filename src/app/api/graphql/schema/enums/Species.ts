import { builder } from "../builder";

export enum Species {
  Rat = "Rat",
}

builder.enumType(Species, {
  name: "Species",
});
