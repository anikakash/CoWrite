import { fetchData } from "./apiClient";
import { useQuery } from "@tanstack/react-query";


const useGetBlogByAuthor = (userId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", userId],
    queryFn: async () => {
      const response = await fetchData(`/articals?userId=${userId}`);
      return response.data;
    },
  });

  return { data, isLoading, isError, error };
};

export default useGetBlogByAuthor;