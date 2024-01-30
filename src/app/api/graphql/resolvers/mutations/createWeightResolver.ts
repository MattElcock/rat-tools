import { Metric } from "../../schema/enums/Metric";
import { Weight } from "../../schema/objects/Weight";

type resolverArgs = {
  value: number;
  dateTaken: string;
  metric: Metric;
};

const createWeightResolver = (_parent: any, args: resolverArgs) => {
  return new Weight(args.metric, args.value, new Date(args.dateTaken));
};

export default createWeightResolver;
