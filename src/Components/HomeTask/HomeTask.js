import './HomeTask.css';

function HomeTask({accidents}) {
  // check data structure
  console.log(accidents)

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
