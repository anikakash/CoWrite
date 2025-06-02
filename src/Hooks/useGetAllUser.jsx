import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./apiClient";

const fetchUsers = async ({ pageParam }) => {
  const { currentPage, pageSize } = pageParam;
  const res = await fetchData("/users", {
    _page: currentPage,
    _limit: pageSize,
  });

  const data = res.data;
  const total = Number(res.headers["x-total-count"]);

  return { data, total };
};

const useGetAllUser = (currentPage, pageSize) => {
  const {
    data,
    isLoading: loading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users", currentPage, pageSize],
    queryFn: () => fetchUsers({ pageParam: { currentPage, pageSize } }),
    keepPreviousData: true, // keeps old data while fetching new
    staleTime: 5 * 60 * 1000, // same as your old CACHE_DURATION (5 min)
  });

  return {
    users: data?.data || [],
    totalUsers: data?.total || 0,
    loading,
    error: isError ? error.message : null,
  };
};

export default useGetAllUser;
