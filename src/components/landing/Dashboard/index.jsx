import React from 'react'
import { Container, Button } from 'components/common'
import dashboardScreenshot from 'assets/dashboard.jpg'
import { Wrapper, DashboardWrapper, Details, Thumbnail, Lead } from './styles'

export const Dashboard = () => (
  <Wrapper id="dashboard">
    <DashboardWrapper as={Container}>
      <Thumbnail>
        <img src={dashboardScreenshot} />
      </Thumbnail>
      <Details>
        <h2>Powerful Dashboard</h2>
        <Lead>
          <ul>
            <li>Elegant interface to save memories instantly.</li>
            <li>See how your mood has been changing recently.</li>
            <li>View recently saved notes.</li>
          </ul>
        </Lead>
      </Details>
    </DashboardWrapper>
  </Wrapper>
)
