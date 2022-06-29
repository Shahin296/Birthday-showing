import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

const [isClicked, setClicked] = useState(false);
 
 function handleClearBtn(){
   setClicked(true)
 }

  return (
  <div className='section'>
      {isClicked ? <h3>There's no one's birthday</h3> : <div>
      <h2>{data.length} Birthday Today</h2>
      {data.map((person, id) => <List person={person} index={id}/>)}
      <button onClick={handleClearBtn} className='btn'>Clear All</button>
  </div>}
  </div>
  );
}

export default App;
