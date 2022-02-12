import styled from 'styled-components';
import { COLORS } from '../constant';
import { TwitterIcon } from './icons';

const Wrapper = styled.section`
  padding: 48px 32px;
  background-color: ${COLORS.secendary};

`;

const ContentWrapper = styled.article`
  padding: 0 16px;
`;


const Title = styled.h1`
  margin-bottom: 38px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 2.6rem;
  color: ${COLORS.white};
  max-width: 122px;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 300;
  color: ${COLORS.white};
  margin-bottom: 38px;
`;

const SocialWrapper = styled.ul``;

function Footer():JSX.Element {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>modern art gallery</Title>
        <Description>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</Description>
      </ContentWrapper>
      <SocialWrapper>
        <li>
          <TwitterIcon />
        </li>
      </SocialWrapper>
  </Wrapper>
  )
}

export default Footer;