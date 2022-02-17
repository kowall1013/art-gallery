import styled from 'styled-components';
import { COLORS, QUERIES } from '../constant';

const Wrapper = styled.section`
  padding: 48px 32px;
  background-color: ${COLORS.secendary};

  @media ${QUERIES.tabletAndUp} {
    padding: 88px 39px;
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-gap: 68px;
  }
`;

const ContentWrapper = styled.article``;

const Title = styled.h1`
  font-family: 'Big Shoulders Display', cursive;
  margin-bottom: 48px;
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 4.5rem;
  color: ${COLORS.white};

  @media ${QUERIES.tabletAndUp} {
    font-size: 5.5rem;
    line-height: 5rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: 300;
  color: ${COLORS.white};
  text-align: justify;
`;

const AdressList = styled.ul`
  margin-bottom: 20px;
`;

const AddresItem = styled.li`
  color: ${COLORS.white};
  font-size: 1.8rem;
  font-weight: 300;

  &:first-child {
    font-family: 'Big Shoulders Display', cursive;
    font-weight: 900;
    font-size: 3.2rem;
    line-height: 3.2rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: ${COLORS.primary};
  }
`;

function LocationSection(): JSX.Element {
  return (
    <Wrapper>
      <Title>our location</Title>
      <ContentWrapper>
        <AdressList>
          <AddresItem>99 king street</AddresItem>
          <AddresItem>Newport</AddresItem>
          <AddresItem>RI 02840</AddresItem>
          <AddresItem>United States of America</AddresItem>
        </AdressList>
        <Description>
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </Description>
      </ContentWrapper>
    </Wrapper>
  );
}

export default LocationSection;
