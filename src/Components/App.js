import React, { useState } from 'react';
// app components
import HomeTask from './HomeTask/HomeTask';
import Map from './Map/MapContainer';

function App() {
  const [accidents, setAccidents] = useState([]);

  return (
    <React.Fragment>
      <Map setAccidents={setAccidents}/>
      <HomeTask accidents={accidents} />
    </React.Fragment>
  );
}

export default App;
