import { builder } from "../builder";
import { Metric } from "../enums/Metric";

export class Weight {
  metric: Metric;
  value: number;
  dateTaken: string;

  constructor(metric: Metric, value: number, dateTaken: string) {
    this.metric = metric;
    this.value = value;
    this.dateTaken = dateTaken;
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
