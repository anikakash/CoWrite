import {Divider} from "antd";
import styled from 'styled-components';

const DividerWrapper = styled.div`
  width: 100%;
  margin-bottom: 0;

  margin-top: 10px;
  h2 {
    margin-left: 20px;
    margin-bottom: 0;
  }
`;
const HeadingDivider = ({title}) => {
  return (
    <DividerWrapper>
        <h2>{title}</h2>
        <Divider style={{ marginTop:"0px"}}/>
      </DividerWrapper>
  )
}

export default HeadingDivider;
