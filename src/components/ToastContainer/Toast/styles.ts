/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'info' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #ebf8ff;
    background: #3172b7;
  `,
  success: css`
    color: #e6fffa;
    background: #2e656a;
  `,
  error: css`
    color: #fddede;
    background: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 16px;

  position: relative;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 16px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
