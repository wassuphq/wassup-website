import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Dashboard, Features } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Dashboard />
    <Features />
  </Layout>
);
