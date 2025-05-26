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
        // Simulate delay (e.g., 2 seconds)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false); // Ensure loading is false even if error occurs
      }
    };
    getUsers();
  }, []);

  return (
    <Flex wrap gap="middle" justify="center">
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Discover Authors</h2>
      </div>
      <Divider style={{ width: "100%" }} />

      {loading
        ? // show 3 placeholder skeleton cards
          Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} loading={true} style={{ minWidth: 300 }} />
          ))
        : users.map((user) => (
            <Card key={user.id} style={{ minWidth: 300 }}>
              <Card.Meta
                avatar={
                  <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
                }
                title={user.name}
                description={
                  <>
                    <p>{user.numberOfArticles} Articles</p>
                    {user.stack.map((skill, index) => (
                      <Tag color="green" key={index}>
                        {skill}
                      </Tag>
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
