import { getPetsPrefetch } from "@/api/pets";
import { PetMenu } from "@/features/PetMenu";
import { Stack } from "@chakra-ui/react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function UserHomepage() {
  const petsQuery = getPetsPrefetch();

  return (
    <HydrationBoundary state={dehydrate(petsQuery)}>
      <Stack>
        <PetMenu />
      </Stack>
    </HydrationBoundary>
  );
}
