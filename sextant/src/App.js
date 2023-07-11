import './App.css';
import React from 'react';
import Banner from './banner';
import Exhibit from './exhibit';

function App() {
  return (
    <div>
      <Banner />
      <Exhibit heading="Start The App">
        {/* Child components go here */}
      </Exhibit>
    </div>
  );
}

export default App;
