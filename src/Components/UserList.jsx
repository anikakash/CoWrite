import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card, Pagination, Tag, Row, Col } from "antd";
import axios from "axios";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
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
        const res = await axios.get("http://localhost:8000/users");
        console.log(res.data);
        setUsers(res.data);
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
      <HeadingDivider title="Discover Authors" />
   

      <Row gutter={[24, 24]}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <UserCard key={index} loading={true} />
            ))
          : currentUsers.map((user) => (
              <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
                <Link to={`/users/${user.id}`}>
                <Card key={user.id} hoverable>
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
                </Card>
                </Link>
              </Col>
            ))}
      </Row>

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
