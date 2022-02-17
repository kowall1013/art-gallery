import styled from 'styled-components';

const ImageWarppar = styled.picture`
  margin-bottom: 32px;

  img {
    display: block;
    width: 100%;
  }
`;

type ImageProps = {
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
  alt?: string;
};

function Image( { desktopSrc, tabletSrc, mobileSrc, alt = '' }: ImageProps ) {
  return (
    <ImageWarppar>
      <source media="(min-width: 1100px)" srcSet={desktopSrc} />
      <source media="(min-width: 550px)" srcSet={tabletSrc} />
      <img src={mobileSrc} alt={alt} />
  </ImageWarppar>
  )
}

export default Image;