import { fetchData } from "./apiClient";
import { useQuery } from "@tanstack/react-query";

const useGetComment = (articleId, userId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", articleId, userId],
    queryFn: async () => {
      const response = await await fetchData(`/comments`, {
        userId: userId,
        articleId: articleId,
      });
      return response.data;
    },
  });

  return { data, isLoading, isError, error};
};

export default useGetComment;
