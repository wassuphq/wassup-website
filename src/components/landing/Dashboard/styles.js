import styled from 'styled-components';
import dashboardBackground from 'assets/illustrations/dashboard-background.svg';

export const Wrapper = styled.div`
  background-image: url(${dashboardBackground});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-image: unset;
  }
`;

export const DashboardWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }
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

export const Lead = styled.div`
  color: #999;
  font-size: 20px;
`;
