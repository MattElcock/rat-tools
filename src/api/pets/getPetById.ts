import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { detail } from "./keys";

const getPetById = async (id: string) => {
  const response = await axios.get(
    `http://localhost:3000/api/pets/${id}?populate=*`
  );

  return response.data;
};

const getPetByIdPrefetch = (id: string) => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: detail(id),
    queryFn: () => getPetById(id),
  });

  return queryClient;
};

const useGetPetById = (id: string) => {
  return useQuery({
    queryKey: detail(id),
    queryFn: () => getPetById(id),
  });
};

export { useGetPetById, getPetByIdPrefetch };
