import React, { useState } from 'react';
// app components
import HomeTask from './HomeTask/HomeTask';
import Map from './Map/MapContainer';

function App() {
  const [accidents, setAccidents] = useState([]);
  const [location, setLocation] = useState(null);

  return (
    <React.Fragment>
      <Map setAccidents={setAccidents} location={location}/>
      <HomeTask accidents={accidents} setLocation={setLocation}/>
    </React.Fragment>
  );
}

export default App;
