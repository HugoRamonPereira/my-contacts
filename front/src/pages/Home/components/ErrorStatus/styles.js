import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.red.red900};
      display: block;
      margin-bottom: 1.5rem;
    }
  }

  img {
    margin-inline: auto;
    margin-bottom: 1.5rem;
    width: 80px;
  }
`;
