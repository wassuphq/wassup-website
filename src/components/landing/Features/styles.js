import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const CardsWrapper = styled.div`
  text-align: center;
`;

export const Card = styled.div`
  flex: 1;
  padding-right: 10rem;
  width: 200px;
  max-width: 200px;
  text-align: center;
  display: inline-block;

  &:last-child {
    padding-right: unset;
  }

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    max-width: 100%;
    order: 1;
  }
`;

export const CardHeading = styled.div`
  margin-bottom: 2rem;
  font-size: 20pt;
  color: #212121;
`;

export const CardDescription = styled.div`
  margin-bottom: 2.5rem;
  font-size: 12pt;
  font-weight: normal;
  line-height: 1.3;
  color: #999;
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
