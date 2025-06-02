import { useEffect, useState } from "react";
import { fetchData } from "./apiClient";

const useGetBlog = (sortedValue) => {
  const [recentBlog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getRecentArticles = async () => {
      setLoading(true);
      try {
        const res = await fetchData("/articals", {
          _sort: sortedValue,
          _order: "desc",
          _limit: 10,
        });
        setRecentBlog(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getRecentArticles();
  }, [sortedValue]);

  return { recentBlog, loading, error };
};

export default useGetBlog;