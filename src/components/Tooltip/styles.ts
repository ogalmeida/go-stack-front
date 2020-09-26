import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: #ff9000;

  span {
    background-color: #ff9000;
    color: #f4ede8;
    position: absolute;
    bottom: calc(100% + 12px);
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    transition: opacity 0.2s;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
