import { useEffect, useState } from "react";
import { fetchData } from "./apiClient";

const userCache = {};
const CACHE_DURATION = 5 * 60 * 1000;
const useGetAllUser = (currentPage, pageSize) => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = `page_${currentPage}_limit_${pageSize}`;
    const now = Date.now();

    const cached = userCache[cacheKey];
    if (cached && now - cached.timestamp < CACHE_DURATION) {
      setUsers(cached.data);
      setTotalUsers(cached.total);
      setLoading(false);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchData("/users", {
          _page: currentPage,
          _limit: pageSize,
        });
        const data = res.data;
        const total = Number(res.headers["x-total-count"]);

        setUsers(data);
        setTotalUsers(total);
        userCache[cacheKey] = {
          data,
          total,
          timestamp: Date.now(),
        };
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, pageSize]);

  return { users, totalUsers, loading, error };
};


export default useGetAllUser;