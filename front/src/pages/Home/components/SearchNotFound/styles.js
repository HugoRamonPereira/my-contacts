import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray.gray200};
    margin-left: 1.2rem;
    word-break: break-word;
  }
`;
