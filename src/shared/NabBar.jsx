import { UserOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #ffffff;
    margin: 20px auto;
    padding: 11px 60px;
    height: 43px;
    border-radius: 62px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 20px;
    z-index: 100;
    width: 90%;
`;

const NavLinks = styled(Menu)`
  display: flex;
  align-items: center;
  background: transparent;
  width: 600px;
  margin: 0 10px;
  .ant-menu-item {
    font-weight: bold;
    font-size: 16px;
    align-items: center;
    margin: 0 auto;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  img {
    width: 60px;
    height: 40px;
    margin-right: 8px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
`;

const SignInButton = styled(Button)`
  background-color: #0f172a;
  color: #fff;
  border: none;
`;

const NabBar = () => {
  return (
    <>
      <HeadWrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}>
          <Logo>
            <img src="/blog_ai.png" alt="logo" />
            CoWrite
          </Logo>
        </Link>
        <NavLinks>
          <Menu.Item key="home" style={{ alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}>Home</Link>
          </Menu.Item>
          <Menu.Item key="author">Authors</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </NavLinks>

        <RightSection>
          <SignInButton icon={<UserOutlined />}>Sign In</SignInButton>
        </RightSection>
      </HeadWrapper>
    </>
  );
};

export default NabBar;
