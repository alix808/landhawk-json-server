import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${(props) => props.top}px;
    right: ${(props) => props.right}px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 3px solid lightgray;
    border-top-color: black;
    animation: ${rotate} 0.3s linear infinite;
  }
`;
