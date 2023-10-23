import styled from 'styled-components';

export const Container = styled.header`
  padding-inline: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.gray100};
  padding-bottom: 1.5rem;

  strong {
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.purpleMain};
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.purpleMain};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.purpleMain};
      color: #FFF;
    }
  }
`;
