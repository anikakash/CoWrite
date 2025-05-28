import { InstagramOutlined, LinkedinOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Button  } from "antd";
import styled from "styled-components";

const HeadWrapper = styled.div`
  width: 97%;
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
  justify-content: space-between;
  /* height: 40px;
  width: 80px; */
  padding: 0 10px;
  font-size: 35px; /* icon size */
  color: #0f172a;  /* optional: dark color */
  gap: 10px;       /* space between icons */
  cursor: pointer;
`;


const SignInButton = styled(Button)`
  background-color: #0f172a;
  color: #fff;
  border: none;
`;



const Footer = () => {
  return (
    <div>
      <HeadWrapper>
        <Logo>
          <img src="/blog_ai.png" alt="logo" />
          CoWrite
        </Logo>

        <RightSection>
            <LinkedinOutlined /> 
            <InstagramOutlined/>
        </RightSection>
      </HeadWrapper>
    </div>
  );
};

export default Footer;
