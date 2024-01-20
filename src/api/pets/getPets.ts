import { QueryClient, useQuery } from "@tanstack/react-query";
import { all } from "./keys";

const getPets = async () => {
  const response = await fetch("http://localhost:3000/api/pets?fields[0]=name");

  return response.json();
};

const getPetsPrefetch = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: all,
    queryFn: getPets,
  });

  return queryClient;
};

const useGetPets = () => {
  return useQuery({
    queryKey: all,
    queryFn: getPets,
  });
};

export { useGetPets, getPetsPrefetch };
