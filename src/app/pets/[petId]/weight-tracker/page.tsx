import { WeightTracker } from "@/features/WeightTracker";
import { PageProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weight Tracker | MyMischief",
};

export default function WeightTrackerPage(props: PageProps) {
  return <WeightTracker petId={props.params.petId} />;
}
