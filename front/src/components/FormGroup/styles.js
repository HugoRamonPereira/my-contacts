import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.red.red300};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 18px;
      right: 16px;
    }
  }
`;
