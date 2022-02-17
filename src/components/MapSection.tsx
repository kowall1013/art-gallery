import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import { QUERIES } from '../constant';
import Button from './Button';

const Wrapper = styled.section`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  @media ${QUERIES.tabletAndUp} {
    left: 40px;
  }
`;

const MapWrapper = styled(MapContainer)`
  height: 100%;
`;

function MapSection(): JSX.Element {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button secondary path="/">
          BACK TO HOME
        </Button>
      </ButtonWrapper>
      <div id="map">
        <MapWrapper center={[41.490578, -71.310196]} zoom={16}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.490578, -71.310196]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapWrapper>
      </div>
    </Wrapper>
  );
}

export default MapSection;
