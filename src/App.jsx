import logo from './logo.svg';
import React, {useState} from 'react';
import './App.sass';
import Sidebar from "./App/Sidebar";
import Content from "./App/Content";
import Player from "./App/Player";

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App xsc10 sc10 mc10 lc10">
      <Sidebar open_sb={open} setOpen_sb={setOpen}/>
      <Content open_cnt={open} setOpen_cnt={setOpen}/>
      {/* <Player/> */}
    </div>
  );
}

export default App;
