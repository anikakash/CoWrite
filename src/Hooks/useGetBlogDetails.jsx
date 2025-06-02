import { useQuery } from "@tanstack/react-query";
import api from "./apiClient";

const fetchBlog = async (id) => {
  const res = await api.get(`/articals/${id}`);
  return res.data;
};

const fetchUser = async (userId) => {
  const res = await api.get(`/users/${userId}`);
  return res.data;
};

const useGetBlogDetails = (id) => {
  const {
    data: blog,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id),
    enabled: !!id,
  });

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", blog?.userId],
    queryFn: () => fetchUser(blog.userId),
    enabled: !!blog?.userId,
  });

  return {
    blog,
    user,
    loading: blogLoading || userLoading,
    error: blogError || userError,
  };
};

export default useGetBlogDetails;
