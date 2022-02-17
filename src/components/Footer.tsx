import styled from 'styled-components';
import { COLORS, QUERIES } from '../constant';
import { TwitterIcon, FbIcon, IgIcon } from './icons';

type SecondaryProps = {
  secondary?: boolean;
};

const Wrapper = styled.section<SecondaryProps>`
  padding: 48px 32px;
  background-color: ${({ secondary }) =>
    secondary ? COLORS.primary : COLORS.secendary};

  @media ${QUERIES.tabletAndUp} {
    padding: 56px 39px;
    display: grid;
    grid-template-columns: 175px 1fr 120px;
    align-items: flex-start;
    justify-content: start;
  }
`;

const Title = styled.h1<SecondaryProps>`
  padding: 0 16px;
  margin-bottom: 38px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 2.6rem;
  color: ${({ secondary }) => (secondary ? COLORS.secendary : COLORS.white)};
  max-width: 122px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 160px;
    padding: 0;
  }
`;

const Description = styled.p<SecondaryProps>`
  padding: 0 16px;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 300;
  color: ${({ secondary }) => (secondary ? COLORS.secendary : COLORS.white)};
  margin-bottom: 38px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 400px;
  }
`;

const SocialWrapper = styled.ul`
  padding: 0 16px;
  display: flex;
  gap: 16px;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    margin-left: auto;
    padding: 0;
  }
`;

const Link = styled.a`
  cursor: pointer;
`;

type FooterProps = {
  secondary?: boolean;
};

function Footer({ secondary }: FooterProps): JSX.Element {
  return (
    <Wrapper secondary={secondary}>
      <Title secondary={secondary}>modern art gallery</Title>
      <Description secondary={secondary}>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </Description>
      <SocialWrapper>
        <li>
          <Link href="www.facebook.com">
            <FbIcon color={COLORS.secendary} />
          </Link>
        </li>
        <li>
          <Link href="www.instagram.com">
            <IgIcon color={COLORS.secendary} />
          </Link>
        </li>
        <li>
          <Link href="www.twitter.com">
            <TwitterIcon color={COLORS.secendary} />
          </Link>
        </li>
      </SocialWrapper>
    </Wrapper>
  );
}

export default Footer;
