import styled from "styled-components";
import NabBar from "./Components/NabBar";

const Container = styled.div`
  width: 90%;
  height: 100vh;
  background-color: #ecf4fa;
  margin: 20px auto;
  border-radius: 5px;
  border: 2px solid #abc6e2;
  box-shadow: #abc6e2;
`;

function App() {
  return (
    <Container>
      <NabBar />
    </Container>
  );
}

export default App;
