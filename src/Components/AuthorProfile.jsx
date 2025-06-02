import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Avatar, Tag, Row, Col, Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import HeadingDivider from "../shared/HeadingDivider";
import { useParams } from "react-router-dom";
import BlogByAuthor from "./BlogByAuthor";
import { useGetAuthor } from "../Hooks/api";

const AuthorProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAuthor(id);

  return (
    <Container>
      <HeadingDivider title="Discover Authors" />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CardWrapper>
            {isLoading ? (
              Array.from({ length: 1 }).map((_, index) => (
                <Card key={index} loading={true} style={{ border: "0px" }} />
              ))
            ) : (
              <ProfileCard>
                <AvatarSection>
                  <Avatar
                    src={`https://i.pravatar.cc/150?u=${data.id}`}
                    size={48}
                  />
                  <div className="info">
                    <h3>{data.name}</h3>
                    <p>
                      <EditOutlined style={{ marginRight: 5 }} />
                      {data.numberOfArticles} Articles
                    </p>
                  </div>
                </AvatarSection>
                <TagList>
                  {data.stack.map((skill, index) => (
                    <Tag color="green" key={index}>
                      {skill}
                    </Tag>
                  ))}
                </TagList>
                <DescriptionSection>
                  <p>{data.bio}</p>
                </DescriptionSection>
              </ProfileCard>
            )}
          </CardWrapper>
        </Col>
      </Row>
      {data?.id && <BlogByAuthor userId={data.id} />}
    </Container>
  );
};

export default AuthorProfile;

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
