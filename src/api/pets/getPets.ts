import { QueryClient, useQuery } from "@tanstack/react-query";

const queryKey = ["pets"];

const getPets = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/pets?fields[0]=name"
    );

    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const getPetsPrefetch = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey,
    queryFn: getPets,
  });

  return queryClient;
};

const useGetPets = () => {
  return useQuery({
    queryKey,
    queryFn: getPets,
  });
};

export { useGetPets, getPetsPrefetch };
