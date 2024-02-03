import { WeightTracker } from "@/features/WeightTracker";
import { PageProps } from "@/types";

export default function WeightTrackerPage(props: PageProps) {
  return <WeightTracker petId={props.params.petId} />;
}
