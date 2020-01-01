import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
  }

  ${({ desktop }) =>
    desktop
      ? `
      @media (max-width: 960px) {
          display: none;
      }

      a {
          margin-right: 2rem;

          &:last-child {
              margin-right: unset;
          }

          &:hover {
            font-weight: bold;
          }
      }
    `
      : `
      padding: 3rem;
      display: flex;
      flex-direction: column;

      a {
          margin-bottom: 1rem;

          &:last-child {
              margin-bottom: unset;
          }
      }
  `}
`;
