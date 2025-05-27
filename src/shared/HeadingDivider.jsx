import {Divider} from "antd";
import styled from 'styled-components';

const DividerWrapper = styled.div`
  width: 100%;
  h2 {
    margin-left: 20px;
  }
`;
const HeadingDivider = ({title}) => {
  return (
    <DividerWrapper>
        <h2>{title}</h2>
        <Divider />
      </DividerWrapper>
  )
}

export default HeadingDivider;
