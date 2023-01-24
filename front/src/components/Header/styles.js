import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;

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
