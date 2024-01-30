import { builder } from "../builder";

export enum Metric {
  Grams = "Grams",
}

builder.enumType(Metric, {
  name: "Metric",
});
