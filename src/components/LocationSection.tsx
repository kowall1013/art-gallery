import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import Button from '../components/Button';
import { COLORS } from '../constant';

const Wrapper = styled.section`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: red;
`;

const MapWrapper = styled(MapContainer)`
  height: 100%;
`;

function LocationSection(): JSX.Element {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button secondary path="location">
          BACK TO HOME
        </Button>
      </ButtonWrapper>
      <div id="map">
        <MapWrapper center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapWrapper>
      </div>
    </Wrapper>
  );
}

export default LocationSection;
