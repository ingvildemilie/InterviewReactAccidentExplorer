import React, { useEffect, useState } from 'react';
import './HomeTask.css';
import { SortedAccidents } from './SortedAccidents';
import { Filter } from './Filter';

function HomeTask({accidents, setLocation}) {
  // check data structure
  console.log('Hometask:accidents', accidents)

  const [openAccident, setOpenAccident] = useState()
  const [filter, setFilter] = useState("Alle")

  const filteredAccidents = accidents.filter(a => filter == "Alle" ? a : a.Fartsgrense === filter)
  
  return (
    <div className="homeTask">
      <header className="homeTask-header">
        HomeTask: Accidents Explorer
      </header>
      <div className="filter">
        <h4>Filter: </h4>
        <Filter
          setFilter={setFilter}
        />
       </div>
      <div className='accidents-wrapper'>
        <SortedAccidents 
          accidents={filteredAccidents} 
          openAccident={openAccident} 
          setOpenAccident={setOpenAccident} 
          setLocation={setLocation}
        />
      </div>
    </div>
  );
}

export default HomeTask;
