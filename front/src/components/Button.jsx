import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 3.25rem;
  padding-inline: 1rem;
  border: none;
  font-size: 1rem;
  padding-inline: 1rem;
  background: ${({ theme }) => theme.colors.primary.purpleMain};
  color: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 0.25rem;
  outline: none;
  transition: background 0.1s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.purpleLight}
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.purpleDark};
    transform: scale(1.01);
  }

  &[disabled] {
    background: #CCCCCC;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.red.red400};

    &:hover {
    background: ${theme.colors.red.red300}
  }

  &:active {
    background: ${theme.colors.red.red700};
    transform: scale(1.01);
  }
  `}
`;

export default Button;
