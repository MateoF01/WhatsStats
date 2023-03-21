import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import {useState} from "react";
import { FileAnalyzer } from './components/FileAnalyzer';

function App() {

  const [file, setFile] = useState();

  return (
    <div className="App">
      <header className="App-header">
     

        <h1>WhatsStats</h1>
  

        <Button variant="contained" component="label"> Upload File 
        <input type="file" onChange={e => setFile(e.target.value)} hidden/></Button>

        <br></br>

        <FileAnalyzer file = {file} ></FileAnalyzer>
      </header>
    </div>
  );
}

export default App;
