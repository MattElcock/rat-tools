import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryKey = ["pets"];

const getPets = async () => {
  try {
    const response = await axios.get("/api/pets");

    return response.data;
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
