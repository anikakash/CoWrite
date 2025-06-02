import { useEffect, useState } from "react";
import  api  from "./apiClient";


const useGetBlogByAuthor = (id) => {
  const [recentBlog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRecentArticles = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/articals?userId=${id}`);
        setRecentBlog(res.data);
        console.log(res.data);
        console.log("Author ID: ", id);
      } catch (err) {
        console.log("Error fetching recent articles: ", err);
      } finally {
        setLoading(false);
      }
    };
    getRecentArticles();
  }, [id]);
  return { recentBlog, loading };
};

export default useGetBlogByAuthor;