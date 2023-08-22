import React from 'react';
import './HomeTask.css';

function HomeTask({accidents, setLocation}) {
  // check data structure
  console.log('Hometask:accidents', accidents)

  return (
    <div className="homeTask">
      <header className="homeTask-header">
        HomeTask: Accidents Explorer
      </header>

      <div>Ulykker: {accidents?.length}</div>
      <div>console.log(accidents);</div>

    </div>
  );
}

export default HomeTask;
