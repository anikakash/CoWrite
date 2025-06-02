import { useEffect, useState } from "react";
import api  from "./apiClient";

const useGetBlogDetails = (id) => {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getBlog = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await api.get(`/articals/${id}`);
        setBlog(res.data);

        const userRes = await api.get(`/users/${res.data.userId}`);

        setUser(userRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [id]);

  return { blog, user, loading, error };
};

export default useGetBlogDetails;