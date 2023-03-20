import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import { SectionTitle } from 'helpers/definitions';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
}

const Newsletter: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter: Newsletter = markdownRemark.frontmatter;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const mailchimpSubscribe = async (name: string, email: string) => {
    try {
      const MAILCHIMP_DATA_CENTER = 'us17';
      const MAILCHIMP_LIST_ID = '7864a33683';
      const MAILCHIMP_API_KEY = '85c972f341b5c987aff7e6308ca77c24-us17';

      const response = await axios.post(
        `https://${MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: name,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error subscribing to Mailchimp:', error);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mailchimpSubscribe(name, email);
  };

  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} value={name} onChange={(event) => setName(event.target.value)} />
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)} />
          <Button primary block type="submit">
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
