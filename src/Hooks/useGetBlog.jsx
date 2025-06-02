import { fetchData } from "./apiClient";
import { useQuery } from "@tanstack/react-query";

const useGetBlog = (sortedValue) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", sortedValue],
    queryFn: async () => {
      const response = await fetchData("/articals", {
        _sort: sortedValue,
        _order: "desc",
        _limit: 10,
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, isError, error };
};

export default useGetBlog;
