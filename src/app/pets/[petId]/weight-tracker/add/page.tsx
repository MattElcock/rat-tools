import { AddNewWeight } from "@/features/AddNewWeight";
import { PageProps } from "@/types";

export default function WeightTrackerPage(props: PageProps) {
  return <AddNewWeight petId={props.params.petId} />;
}
