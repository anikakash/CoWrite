import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const fetchData = async (url, params = {}) => {
  try {
    const res = await api.get(url, { params });
    return res;
  } catch (error) {
    throw new Error(error.message || "API Error");
  }
};

export const useGetAllUser = (currentPage, pageSize) => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchData("/users", {
          _page: currentPage,
          _limit: pageSize,
        });
        setUsers(res.data);
        setTotalUsers(Number(res.headers["x-total-count"]));
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

export const useGetBlogDetails = (id) => {
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

export const useGetBlog = (sortedValue) => {
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

  return {recentBlog, loading, error}
};


export const useGetBlogByAuthor =  (id) =>{
 const [recentBlog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getRecentArticles = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/articals?userId=${id}`)
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
  return {recentBlog, loading};
}

export const useGetComment = ( articleId, userId)=>{
const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await fetchData(`/comments`,{
          userId: userId,
articleId: articleId,

        })
        setComments(res.data);
      } catch (err) {
        console.log("Error fetching comments: ", err);
      } finally {
        setLoading(false);
      }
    };

    getComment();
  }, [articleId, userId]);

  return {comments, loading};
}