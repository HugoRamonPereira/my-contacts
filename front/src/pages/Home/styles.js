import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const SearchInputContainer = styled.div`
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

export const Header = styled.header`
  padding-inline: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

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

export const ListContainer = styled.div`
  margin-top: 2rem;

  header {
    margin-bottom: 0.8rem;
    padding-inline: 0.4rem;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 0.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.purpleMain}
      }
    }
  }

`;

export const ContactCard = styled.div`
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      margin-bottom: 0.25rem;

      small {
        background: ${({ theme }) => theme.colors.primary.purpleLighter};
        color: ${({ theme }) => theme.colors.primary.purpleMain};
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.25rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray.gray200}
    }
  }

  .actions {
    background: transparent;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 0.7rem;
    }
  }
`;
