import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Divider, Flex, Tag } from "antd";

const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    getUsers();
  }, []);

  return (
    <Flex wrap gap="middle" justify="center">
      <h2>Discover Authors</h2>
      <Divider />
      {users.map((user) => (
        <Card key={user.id} loading={loading} style={{ minWidth: 300 }}>
          <Card.Meta
            avatar={<Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} />}
            title={user.name}
            description={
              <>
                <p>{user.numberOfArticles} Articls</p>
                {user.stack.map((skill, index) => (
                  <span key={index}>
                    <Tag color="green">{skill}</Tag>
                  </span>
                ))}
              </>
            }
          />
        </Card>
      ))}
    </Flex>
  );
};

export default UserList;
