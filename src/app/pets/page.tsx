import { PetMenu } from "@/features/PetMenu";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function UserHomepage() {
  return (
    <Suspense>
      <PetMenu />
    </Suspense>
  );
}
