import styled from 'styled-components';
import Button from '../components/Button';
import { COLORS } from '../constant';

const ImageWarppar = styled.div`
  margin-bottom: 32px;

  img {
    display: block;
    width: 100%;
  }
`;

const ContentWrapper = styled.article`
  padding: 0 16px;
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

function HeaderSection():JSX.Element {
  return (
    <header>
      <ImageWarppar>
        <img src="assets/mobile/image-hero.jpg" alt="" />
      </ImageWarppar>
      <ContentWrapper>
        <Title>modern art gallery</Title>
        <Description>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</Description>
        <Button>
          OUR LOCATION
        </Button>
      </ContentWrapper>
  </header>
  )
}

export default HeaderSection;