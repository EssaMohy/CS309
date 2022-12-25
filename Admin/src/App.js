import React from 'react';
import './App.css';
import Topbar from './componants/topbar/topbar';
import Newproduct from './componants/newproduct/newproduct';
import Dproduct from './componants/Dproduct/Dproduct';
import Uproduct from './componants/Uproduct/Uproduct'
function App() {
  return (
    <div className="container">
      <div className='top'>
      <Topbar />
      </div>
      <div className='cont2'>
        <Newproduct /><Dproduct />
        </div>
      <div className='Uprod'>
      <Uproduct />
      </div>
    </div>
  );
}

export default App;
