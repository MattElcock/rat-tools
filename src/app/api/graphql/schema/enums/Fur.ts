import { builder } from "../builder";

export enum Fur {
  Black = "Black",
  White = "White",
  Cream = "Cream",
  Gray = "Gray",
  Brown = "Brown",
  Hairless = "Hairless",
}

builder.enumType(Fur, {
  name: "Fur",
});
