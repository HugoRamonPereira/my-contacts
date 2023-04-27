import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #FFFFFF;
    border: none;
    border-radius: 1.5rem;
    height: 3rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding-inline: 1rem;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
