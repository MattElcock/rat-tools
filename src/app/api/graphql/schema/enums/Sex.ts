import { builder } from "../builder";

export enum Sex {
  Male = "Male",
  Female = "Female",
}

builder.enumType(Sex, {
  name: "Sex",
});
