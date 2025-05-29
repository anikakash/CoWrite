import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import {
  Avatar,
  Card,
  Pagination,
  Tag,
  Row,
  Col,
  Empty,
  Typography,
  message,
  Button,
} from "antd";
import axios from "axios";
import styled from "styled-components";
import HeadingDivider from "../shared/HeadingDivider";
import { Link } from "react-router-dom";

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      
      try {
        const res = await axios.get("http://localhost:8000/users", {
          params: {
            _page: currentPage,
            _limit: pageSize,
          },
        });
        setUsers(res.data);
        setTotalUsers(Number(res.headers["x-total-count"]));
      } catch (err) {
        
        message.error(err.message);
        
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, pageSize]);

  const onShowSizeChanger = (current, size) => {
    setPageSize(size);
    setCurrentPage(1); 
  };

  return (
    <Container>
      <HeadingDivider title="Discover Authors" />

      <Row gutter={[24, 24]}>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <UserCard key={index} loading={true} />
          ))
        ) : users.length === 0 ? (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{ image: { height: 60 } }}
            description={
              <Typography.Text>No Authors Data Found.</Typography.Text>
            }
          />
          
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
        {users.length && (
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
