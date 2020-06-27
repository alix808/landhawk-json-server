import styled from 'styled-components';

const greyOne = 'rgba(128, 128, 128, 1)';
const greyTwo = 'rgba(180, 180, 180, 1)';
const margin = '30px';

export const Container = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-top: ${margin};
`;

export const Name = styled.h1`
  color: black;
  font-size: 16px;
  margin-left: ${margin};
  margin-top: ${margin};
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.div`
  color: black;
  font-size: 12px;
  margin-top: 10px;
  color: ${greyOne};
  margin-left: ${margin};
`;

export const Date = styled.div`
  font-size: 12px;
  color: ${greyTwo};
  position: absolute;
  top: 0px;
  right: 0px;
  margin-left: ${margin};
`;

export const Time = styled.div`
  font-size: 12px;
  color: ${greyTwo};
  position: absolute;
  top: 16px;
  right: 0px;
  margin-left: ${margin};
`;

export const Icon = styled.i`
  font-size: 16px;
  color: ${greyTwo};
  position: absolute;
  top: 38px;
  left: 0px;
`;
