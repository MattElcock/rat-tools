import { AddNewPet } from "@/features/AddNewPet";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New Pet | MyMischief",
};

export default function NewPet() {
  return <AddNewPet />;
}
