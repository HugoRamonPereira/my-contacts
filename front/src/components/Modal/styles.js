import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(0);
  }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.3s forwards;`}
`;

export const Container = styled.div`
  width: 90%;
  max-width: 450px;
  background: #FFFFFF;
  border-radius: 0.25rem;
  padding: 1.5rem;
  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.3s forwards;`}

  /* This means that only the direct children of the container will receive the styles below */
  > h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.red.red400 : theme.colors.gray.gray900
  )}
  }

  .modal-body {
    margin-top: 1.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 1.5rem;
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
    margin-right: 1.2rem;
    color: ${({ theme }) => theme.colors.gray.gray200};
    transition: border 0.1s ease-in, color 0.1s ease-in;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.gray.gray500};
      color: ${({ theme }) => theme.colors.gray.gray500}
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

`;
