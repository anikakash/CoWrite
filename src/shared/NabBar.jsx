import { UserOutlined } from "@ant-design/icons";
import { Menu, Button  } from "antd";
import styled from "styled-components";

const HeadWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: #f9fafb;
  margin: 20px auto;
  border: 2px solid #abc6e2;
  padding: 7px;
  height: 43px;
  border-radius: 7px;
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
    <div>
      <HeadWrapper>
        <Logo>
          <img src="/blog_ai.png" alt="logo" />
          CoWrite
        </Logo>
        <NavLinks>
          <Menu.Item key="home" style={{alignItems:"center"}}>Home</Menu.Item>
          <Menu.Item key="author">Authors</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </NavLinks>

        <RightSection>
            <SignInButton icon={<UserOutlined/>}>Sign In</SignInButton>
        </RightSection>
      </HeadWrapper>
    </div>
  );
};

export default NabBar;
