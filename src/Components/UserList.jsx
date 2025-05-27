import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Pagination, Tag } from "antd";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const DividerWrapper = styled.div`
  width: 100%;
  h2 {
    margin-left: 20px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  padding: 20px;
`;

const PagenationWrapper = styled.div`
  align-self: flex-end;
  margin: 16px 20px 20px 0;
  padding: 10px;
`;

const UserCard = styled(Card)`
  width: 400px;
`;

// Component
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // Simulate delay (optional)
        setTimeout(() => {}, 6000);

        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentUsers = users.slice(startIndex, endIndex);

  const onShowSizeChanger = (current, sz) => {
    setPageSize(sz);
  };

  return (
    <Container>
      <HeadingDivider title="Discover Authors"/>

      <CardWrapper>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <UserCard key={index} loading={true} />
            ))
          : currentUsers.map((user) => (
              <UserCard key={user.id}>
                <Card.Meta
                  avatar={
                    <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
                  }
                  title={user.name}
                  description={
                    <>
                      <p style={{ marginBottom: "7px" }}>
                        <EditOutlined /> {user.numberOfArticles} Articles
                      </p>
                      {user.stack.map((skill, index) => (
                        <Tag color="green" key={index}>
                          {skill}
                        </Tag>
                      ))}
                    </>
                  }
                />
              </UserCard>
            ))}
      </CardWrapper>

      <PagenationWrapper>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={users.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger
          onShowSizeChange={onShowSizeChanger}
        />
      </PagenationWrapper>
    </Container>
  );
};

export default UserList;
