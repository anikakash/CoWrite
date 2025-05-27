import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Avatar, Tag, Row, Col, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import HeadingDivider from "../shared/HeadingDivider";

const AuthorProfile = ({ id = 1 }) => {
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await axios.get(`http://localhost:8000/users/${id}`);
        setAuthor(res.data);
      } catch (err) {
        console.error("Error fetching author:", err);
      } finally {
        setLoading(false);
      }
    };

    getAuthor();
  }, [id]);

  return (
    <Container>
      <HeadingDivider title="Discover Authors" />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CardWrapper>
            {loading ? (
              Array.from({ length: 1 }).map((_, index) => (
                <Card key={index} loading={true} style={{ border: "0px" }} />
              ))
            ) : (
              <ProfileCard>
                <AvatarSection>
                  <Avatar
                    src={`https://i.pravatar.cc/150?u=${author.id}`}
                    size={48}
                  />
                  <div className="info">
                    <h3>{author.name}</h3>
                    <p>
                      <EditOutlined style={{ marginRight: 5 }} />
                      {author.numberOfArticles} Articles
                    </p>
                  </div>
                </AvatarSection>
                <TagList>
                  {author.stack.map((skill, index) => (
                    <Tag color="green" key={index}>
                      {skill}
                    </Tag>
                  ))}
                </TagList>
                <DescriptionSection>
                  <p>{author.bio}</p>
                </DescriptionSection>
              </ProfileCard>
            )}
          </CardWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorProfile;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 50px;

  .info h3 {
    margin: 0;
    font-weight: 600;
  }

  .info p {
    margin: 0;
    color: #888;
    font-size: 14px;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const DescriptionSection = styled.div`
  margin: 0;
  color: #888;
  font-size: 14px;
`;
