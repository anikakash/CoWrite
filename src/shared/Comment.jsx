import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Comment = ({ articleId, userId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/comments?userId=${userId}&articleId=${articleId}`
        );
        setComments(res.data);
      } catch (err) {
        console.log("Error fetching comments: ", err);
      } finally {
        setLoading(false);
      }
    };

    getComment();
  }, [articleId, userId]);

  return (
    <Container>
      <Title>Comments ({comments.length})</Title>
      <List>
        {comments.map((comment) => (
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
        ))}
      </List>
    </Container>
  );
};

export default Comment;

const Container = styled.div`

`;

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
