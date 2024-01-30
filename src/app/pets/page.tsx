import { PetMenu } from "@/features/PetMenu";
import { Suspense } from "react";

export default async function UserHomepage() {
  return (
    <Suspense>
      <PetMenu />
    </Suspense>
  );
}
