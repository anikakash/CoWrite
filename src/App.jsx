import styled from "styled-components";
import NabBar from "./shared/NabBar";
import UserList from "./Components/UserList";
import BlogCard from "./Components/BlogCard";
import Footer from "./shared/Footer";
import AuthorProfile from "./Components/AuthorProfile";
import BlogDetails from "./Components/BlogDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
    <BrowserRouter>
    <Container>
    <NabBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<AuthorProfile />} />
        <Route path="/articles/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
      </Container>
    </BrowserRouter>
    // <Container>
    //   <NabBar />
    //    <UserList />
    //   <BlogCard />
    //    <AuthorProfile id={1} />
    //   <BlogCard />
    //   <BlogDetails />
    //   <Footer />
    // </Container>
  );
}

export default App;
