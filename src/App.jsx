import styled from "styled-components";
import NabBar from "./shared/NabBar";
import Footer from "./shared/Footer";
import AuthorProfile from "./Components/AuthorProfile";
import BlogDetails from "./Components/BlogDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Container = styled.div`
  width: 100%;
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
  );
}

export default App;
