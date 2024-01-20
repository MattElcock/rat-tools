import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPetById = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/pets/${id}?populate=*`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getPetByIdPrefetch = (id: string) => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["pets", id],
    queryFn: () => getPetById(id),
  });

  return queryClient;
};

const useGetPetById = (id: string) => {
  return useQuery({
    queryKey: ["pets", id],
    queryFn: () => getPetById(id),
  });
};

export { useGetPetById, getPetByIdPrefetch };
