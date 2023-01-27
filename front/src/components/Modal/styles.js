import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 450px;
  background: #FFFFFF;
  border-radius: 0.25rem;
  padding: 1.5rem;

  h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.red.red400 : theme.colors.gray.gray900
  )}
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancelBtn {
    height: 3.25rem;
    padding-inline: 1rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.gray.gray200};
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.gray.gray200};
    transition: border 0.1s ease-in, color 0.1s ease-in;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.gray.gray500};
      color: ${({ theme }) => theme.colors.gray.gray500}

    }
  }

  Button {
    .trashDelete {
      display: none;
    }

    &:hover {
      width: 28%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: width 0.4s ease-in;

      .trashDelete{
        display: flex;
      }
    }
  }

`;
