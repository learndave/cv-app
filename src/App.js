import './assets/css/App.css';
import './assets/css/Body.css';
import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Sidebar />
        <Main />
      </div>
      {/* Main
        Education 
        Experience
      */}
    </div>
  );
}

export default App;