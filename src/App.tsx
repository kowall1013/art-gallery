import { Routes, Route } from "react-router-dom";
import GlobalStyles from './globalStyles';
import Home from './pages/Home';
import Location from './pages/Location';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
