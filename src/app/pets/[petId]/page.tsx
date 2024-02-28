import { PetProfile } from "@/features/PetProfile";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pet Profile | MyMischief",
};

export default async function PetProfilePage(props: PageProps) {
  return (
    <Suspense>
      <PetProfile petId={props.params.petId} />
    </Suspense>
  );
}
