import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const PP: React.FC = () => (
  <Layout>
    <SEO title="404 PP" />
    <Container section>
      <TitleSection title="404" subtitle="Oops! Looks like we compressed this page a little too much..." center />
      <p className="mt-4 text-center w-full">We have a Weismann Score of 5.2 after all 😏</p>
    </Container>
  </Layout>
);

export default PP;
