import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.purpleMain};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.green.green500};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.red.red400};
  `,
};

export const Container = styled.div`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary.purpleMain};
  color: #FFF;
  border-radius: 4px;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 0.750rem;
  }

  img {
    margin-right: 0.5rem;
  }
`;
