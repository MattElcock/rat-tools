import { AddNewWeight } from "@/features/AddNewWeight";
import { PageProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a Weight | MyMischief",
};

export default function WeightTrackerPage(props: PageProps) {
  return <AddNewWeight petId={props.params.petId} />;
}
