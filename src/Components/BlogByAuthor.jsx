import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";
import { Card, Row, Col } from "antd";
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const { Meta } = Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 6px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 13px;
  margin-top: 10px;
  svg {
    margin-right: 6px;
  }
`;

const BlogByAuthor = ({id}) => {
  const [recentBlog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecentArticles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/articals?userId=${id}`
        );
        setRecentBlog(res.data);
        console.log(res.data)
        console.log("Author ID: ", id);
      } catch (err) {
        console.log("Error fetching recent articles: ", err);
      } finally {
        setLoading(false);
      }
    };
    getRecentArticles();
  }, []);

  return (
    <Container>
      <HeadingDivider title="Recent Articles" />
      <Row gutter={[24, 24]}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card loading={true} />
              </Col>
            ))
          : recentBlog.map((blog) => (
              // <Link to={`/articals/${blog.id}`} >
              <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
                <Link to={`/articles/${blog.id}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="Cover"
                        src={
                          blog.coverageImage ||
                          "https://via.placeholder.com/350x180?text=Article+Cover"
                        }
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    }
                  >
                    <Title>{blog.title}</Title>
                    {/* <Description>{blog.userId}</Description> */}
                    <Description>{blog.content.slice(0, 100)}...</Description>
                    <Footer>
                      <span>
                        <CalendarOutlined />{" "}
                        {new Date(blog.publishedDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span>
                        <CommentOutlined /> {blog.numberOfComments} Comments
                      </span>
                    </Footer>
                  </Card>
                </Link>
              </Col>
              // </Link>
            ))}
      </Row>
    </Container>
  );
};

export default BlogByAuthor;
