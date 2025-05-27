import styled from "styled-components";
import NabBar from "./shared/NabBar";
import UserList from "./Components/UserList";
import BlogCard from "./Components/BlogCard";
import Footer from "./shared/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorProfile from "./Components/AuthorProfile";

const Container = styled.div`
  width: 90%;
  background-color: #ecf4fa;
  margin: 20px auto;
  border-radius: 5px;
  border: 2px solid #abc6e2;
  box-shadow: #abc6e2;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Container>
      <NabBar />
      {/* <UserList />
      <BlogCard /> */}
      <AuthorProfile id={1} />
      <BlogCard />
      <Footer />
    </Container>
  );
}

export default App;
