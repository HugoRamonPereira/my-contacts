import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray.gray200};
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.7;

    strong {
      color: ${({ theme }) => theme.colors.primary.purpleMain};
    }
  }
`;
