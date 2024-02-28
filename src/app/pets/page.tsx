import { PetMenu } from "@/features/PetMenu";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pets | MyMischief",
};

export default async function UserHomepage() {
  return (
    <Suspense>
      <PetMenu />
    </Suspense>
  );
}
