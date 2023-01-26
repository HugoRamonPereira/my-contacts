import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding-inline: 1rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 3.25rem;
  border: 2px solid #FFFFFF;
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.purpleMain}
  }
`;

export default Input;
