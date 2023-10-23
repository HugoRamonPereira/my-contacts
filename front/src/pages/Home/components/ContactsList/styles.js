import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 2rem;
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

      img {
        transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform 0.2s ease-in;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .contact-name {
      display: flex;
      flex-direction: column;
      align-items: right;
      margin-bottom: 0.25rem;
      margin-left: 1rem;

      small {
        background: ${({ theme }) => theme.colors.primary.purpleLighter};
        color: ${({ theme }) => theme.colors.primary.purpleMain};
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.25rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }

      .contact-name-info {
        display: flex;
        flex-direction: row;
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

export const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
`;
