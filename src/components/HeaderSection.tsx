import styled from 'styled-components';
import Button from '../components/Button';
import { COLORS, QUERIES } from '../constant';
import Image from './Image';

const HeaderWrapper = styled.header`
   @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

const ContentWrapper = styled.article`
  padding: 0 16px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 145px;
    transform: translateX(-6liv0px);
    min-width: 340px;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: ${COLORS.gray};
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 6rem;
  text-transform: uppercase;
  line-height: 5.5rem;
`;

function HeaderSection(): JSX.Element {

  return (
    <HeaderWrapper>
      <Image 
        mobileSrc='assets/mobile/image-hero.jpg'
        tabletSrc='assets/tablet/image-hero.jpg'
        desktopSrc='assets/desktop/image-hero.jpg'
        alt='hero image'
      />
      <ContentWrapper>
        <Title>modern art gallery</Title>
        <Description>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </Description>
        <Button path="location">OUR LOCATION</Button>
      </ContentWrapper>
    </HeaderWrapper>
  );
}

export default HeaderSection;
