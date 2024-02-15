import { builder } from "../builder";
import { Metric } from "../enums/Metric";

export class Weight {
  id: string;
  petId: string;
  metric: Metric;
  value: number;
  dateTaken: string;

  constructor(
    id: string,
    petId: string,
    metric: Metric,
    value: number,
    dateTaken: string
  ) {
    this.id = id;
    this.petId = petId;
    this.metric = metric;
    this.value = value;
    this.dateTaken = new Date(dateTaken).toISOString();
  }
}

builder.objectType(Weight, {
  name: "Weight",
  description: "A weight",
  fields: (t) => ({
    metric: t.field({ type: Metric, resolve: (parent) => parent.metric }),
    value: t.exposeInt("value"),
    dateTaken: t.exposeString("dateTaken"),
  }),
});
