import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faDev, faMedium, faTwitter, faYoutube, faPiedPiperPp } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>      
      <Styled.Links>
        <Styled.Link href="https://github.com/realcarlostrujillo" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/realcarlostrujillo/" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Styled.Link>
        <Styled.Link href="https://twitter.com/realcarlostru" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </Styled.Link>
        <Styled.Link href="https://www.youtube.com/@realcarlostrujillo" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </Styled.Link>
        <Styled.Link href="https://dev.to/realcarlostrujillo" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faDev} />
        </Styled.Link>
        <Styled.Link href="https://medium.com/@realcarlostrujillo" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faMedium} />
        </Styled.Link>
        <Styled.Link href="/pp" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faPiedPiperPp} />
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
