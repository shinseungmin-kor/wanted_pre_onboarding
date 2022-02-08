import React from 'react';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';
import './App.css';

function App() {
  return (
    <>
      <div className='AppContainer'>
        <div className='subTitle'>
          <Toggle />
        </div>
        <div className='subTitle'>
          <Modal />
        </div>
        <div className='subTitle'>
          <Tab />
        </div>
        <div className='subTitle'>
          <Tag />
        </div>
        <div className='subTitle'>
          <AutoComplete />
        </div>
        <div className='subTitle'>
          <ClickToEdit />
        </div>
      </div>
    </>
  );
}

export default App;
