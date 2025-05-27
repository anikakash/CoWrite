import styled from "styled-components";
import NabBar from "./Components/NabBar";
import UserList from "./Components/UserList";
import { Flex } from "antd";

const Container = styled.div`
  width: 90%;
  /* height: 100vh; */
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
      <UserList />
      {/* <Flex gap="small" justify="space-around">
        <div style={{ background: "lightblue", padding: "10px" }}>Box 1</div>
        <div style={{ background: "lightgreen", padding: "10px" }}>Box 2</div>
        <div style={{ background: "lightcoral", padding: "10px" }}>Box 3</div>
      </Flex> */}
    </Container>
  );
}

export default App;
