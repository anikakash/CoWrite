import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";
import Comment from "../shared/Comment";
import { Link, useParams } from "react-router-dom";
import { useGetBlogDetails } from "../Hooks/api";

const BlogDetails = () => {
  const { id } = useParams();
  const {blog, user, loading, error} = useGetBlogDetails(id);

  if (loading) {
    return (
      <SkeletonContainer>
        <SkeletonImage />
        <SkeletonTitle />
        <SkeletonAvatarSection>
          <SkeletonAvatar />
          <SkeletonAuthorDetails>
            <SkeletonLine width="100px" />
            <SkeletonLine width="150px" />
          </SkeletonAuthorDetails>
        </SkeletonAvatarSection>
        <SkeletonBox height="100px" />
        <SkeletonBox height="150px" />
      </SkeletonContainer>
    );
  }

  return (
    <Container>
      <CoverImage>
        <img src={blog.coverageImage} alt="Article Cover" />
      </CoverImage>

      <Title>{blog.title}</Title>

      <Link to={`/users/${user.id}`}
        style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
      >
        <AvatarSection>
          <Avatar src={user.avatar} />
          <AuthorInfo>
            <h3>{user.name}</h3>
            <MetaInfo>
              <CalendarOutlined />{" "}
              {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              <span style={{ marginLeft: "20px" }}>
                <EyeOutlined /> {blog.readCount}
              </span>
            </MetaInfo>
          </AuthorInfo>
        </AvatarSection>
      </Link>

      <ArticalBody>{blog.content}</ArticalBody>

      <Placeholder>Wires: Chart Placeholder</Placeholder>

      <HeadingDivider title="Key Trends in AI" />
      <Trends>
        <ul>
          <li>Wider adoption of generative AI models</li>
          <li>Responsible and explainable AI practices</li>
          <li>Integration of AI in everyday products</li>
        </ul>
        <p>
          As the technology matures, expect new regulations and standards to
          follow, ensuring safe and fair use of AI systems.
        </p>
      </Trends>

      <HeadingDivider />
      <Comment articleId={blog.id} userId={user.id} />
    </Container>
  );
};

export default BlogDetails;

// Styled Components

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
`;

const CoverImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 6px;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 20px 0 10px;
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const AuthorInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  h3 {
    margin-bottom: 3px;
  }
`;

const MetaInfo = styled.span`
  font-size: 14px;
  color: #666;
`;

const ArticalBody = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Placeholder = styled.div`
  background-color: #e2e8f0;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-weight: 500;
`;

const Trends = styled.div`
  font-size: 18px;
  ul {
    margin-top: 10px;
    padding-left: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const SkeletonContainer = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  font-family: sans-serif;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SkeletonTitle = styled.div`
  width: 60%;
  height: 30px;
  background: #ddd;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const SkeletonAvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;
const SkeletonAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #ddd;
  border-radius: 50%;
`;
const SkeletonAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const SkeletonLine = styled.div`
  height: 16px;
  width: 100%;
  background: #ddd;
  border-radius: 4px;
`;
const SkeletonBox = styled.div`
  width: 100%;
  height: 100px;
  background: #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;
