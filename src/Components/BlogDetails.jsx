import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await axios.get(`http://localhost:8000/articals/1`);
        setBlog(res.data);

        // Fetch user after blog is set
        const userRes = await axios.get(
          `http://localhost:8000/users/${res.data.userId}`
        );
        setUser(userRes.data);
      } catch (err) {
        console.error("Error fetching blog or user:", err);
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, []);

  return (
    <Container>
      <CoverImage>
        <img src={blog.coverageImage} alt="" />
      </CoverImage>
      <Title>{blog.title}</Title>
      <AvatarSection>
        <Avatar src={user.avatar} />
        <Title>{user.name}</Title>
        <span>
          <CalendarOutlined />{" "}
          {new Date(blog.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span>
          <EyeOutlined /> {" " + blog.readCount}
        </span>
      </AvatarSection>
      <ArticalBody>{blog.content}</ArticalBody>

      <HeadingDivider title="Comments" />
      
    </Container>
  );
};

export default BlogDetails;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  margin: 20px auto;
  padding: 7px;
  border-radius: 7px;
`;

const CoverImage = styled.div`
  width: 100%;
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Title = styled.h2`
  font-size: 22px;
`;

const ArticalBody = styled.div`
  font-size: 18px;
`;
