import { useEffect, useState } from "react";
import { fetchData } from "./apiClient";

const useGetComment = (articleId, userId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await fetchData(`/comments`, {
          userId: userId,
          articleId: articleId,
        });
        setComments(res.data);
      } catch (err) {
        console.log("Error fetching comments: ", err);
      } finally {
        setLoading(false);
      }
    };

    getComment();
  }, [articleId, userId]);

  return { comments, loading };
};

export default useGetComment;