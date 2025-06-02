import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Empty, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetComment } from "../Hooks/api";

const Comment = ({ articleId, userId }) => {
  const { data=[], isLoading, isError, error} = useGetComment(articleId, userId);

  return (
    <Container>
      <Title>Comments ({data.length})</Title>
      <List>
        {data.length === 0 ? (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{ image: { height: 60 } }}
            description={
              <Typography.Text>No Comment Found.</Typography.Text>
            }
          />
        ) : (
          data.map((comment) => (
            <CommentItem key={comment.id}>
              <UserAvatar src={comment.userAvatar} alt={comment.userName} />
              <UserInfo>
                <UserName>
                  <UserTitle>
                    {comment.userName}{" "}
                    <DateSection>
                      <ClockCircleOutlined />{" "}
                      {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </DateSection>
                  </UserTitle>
                  <CommentText>{comment.content}</CommentText>
                </UserName>
              </UserInfo>
            </CommentItem>
          ))
        )}
      </List>
    </Container>
  );
};

export default Comment;

const Container = styled.div``;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const UserTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.strong`
  font-size: 16px;
`;

const DateSection = styled.span`
  /* font-size: 13px; */
  color: #666;
`;

const CommentText = styled.p`
  margin-top: 5px;
  font-size: 15px;
  color: #444;
`;
