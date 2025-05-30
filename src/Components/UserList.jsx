import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card, Pagination, Tag, Row, Col, message } from "antd";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";
import { Link } from "react-router-dom";
import { getAllUser } from "../Hooks/api";
import NoData from "../shared/NoData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const PagenationWrapper = styled.div`
  align-self: flex-end;
  margin: 16px 20px 20px 0;
  padding: 10px;
`;

const UserCard = styled(Card)`
  width: 400px;
  margin: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { users, totalUsers, loading, error } = getAllUser(
    currentPage,
    pageSize
  );

  const onShowSizeChanger = (_, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  if (error) {
    message.error(error);
  }

  return (
    <Container>
      <HeadingDivider title="Discover Authors" />

      <Row gutter={[24, 24]}>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <UserCard key={index} loading={true} />
          ))
        ) : users.length === 0 ? (
          <NoData description="No Authors Data Found." />
        ) : (
          users.map((user) => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Link to={`/users/${user.id}`}>
                <Card hoverable>
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
          ))
        )}
      </Row>
      <PagenationWrapper>
        {users.length > 0 && (
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalUsers}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger
            onShowSizeChange={onShowSizeChanger}
          />
        )}
      </PagenationWrapper>
    </Container>
  );
};
export default UserList;
