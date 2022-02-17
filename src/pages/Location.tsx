import MapSection from '../components/MapSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

function Location() {
  return (
    <div>
      <MapSection />
      <LocationSection />
      <Footer secondary />
    </div>
  );
}

export default Location;
