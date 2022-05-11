import './assets/css/App.css';
import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* Side
          Profile Summary
          Skills
      */}
      {/* Main
        Education 
        Experience
      */}
    </div>
  );
}

export default App;