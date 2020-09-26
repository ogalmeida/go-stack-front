import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 8px;
  background: #ff9000;
  color: #312e39;
  font-weight: 500;
  border-radius: 10px;
  border: 0;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
