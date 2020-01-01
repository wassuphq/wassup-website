import styled from 'styled-components';
import footerBackground from 'assets/illustrations/footer-background.svg';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerBackground});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 2rem 0 2rem;
  }
`;

export const FooterLogo = styled.img`
  padding-left: 30%;

  @media (max-width: 680px) {
    padding-left: 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0 20px 0 0;

      &:hover {
        filter: hue-rotate(45deg);
      }
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
