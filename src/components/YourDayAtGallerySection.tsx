import styled from 'styled-components'
import { COLORS } from '../constant'

const Wrapper = styled.section`
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 0 16px;
`

const ImageWarppar = styled.div`
  margin-bottom: 32px;

  img {
    display: block;
    width: 100%;
  }
`

const ContentWrapper = styled.article``

const ContentInspiredWrapper = styled.article`
  background-color: ${COLORS.secendary};
  color: ${COLORS.white};
  padding: 48px 24px;

  p {
    color: ${COLORS.white};
    margin-bottom: 0;
  }
`

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: ${COLORS.gray};
  margin-bottom: 32px;
`

const Title = styled.h1`
  margin-bottom: 32px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 6rem;
  text-transform: uppercase;
  line-height: 5.5rem;
`

function YourDayAtGallerySection(): JSX.Element {
  return (
    <Wrapper>
      <ImageWarppar>
        <img src="assets/mobile/image-grid-1.jpg" alt="" />
      </ImageWarppar>
      <ContentWrapper>
        <Title>your day at the gallery</Title>
        <Description>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </Description>
      </ContentWrapper>
      <ImageWarppar>
        <img src="assets/mobile/image-grid-2.jpg" alt="" />
      </ImageWarppar>
      <ImageWarppar>
        <img src="assets/mobile/image-grid-3.jpg" alt="" />
      </ImageWarppar>
      <ContentInspiredWrapper>
        <Title>come & be inspired</Title>
        <Description>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </Description>
      </ContentInspiredWrapper>
    </Wrapper>
  )
}

export default YourDayAtGallerySection
