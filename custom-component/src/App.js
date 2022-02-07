// import './App.css';
import React from 'react';
import Toggle from './component/Toggle';

function App() {
  return (
    <>
      <div className='AppContainer'>
        <div className='title'>Wanted_pre_onboarding</div>
        <div className='myName'>Shin Seungmin</div>
        <div className='subTitle'>
          <Toggle />
        </div>
      </div>
    </>
  );
}

export default App;
