import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import './Hello.css';
import Hello from'./Hello';

function App(props) {
return <div>
 Hello !<strong> {props.name} </strong> is  {props.age}  Years old
  <br/>
  <p >she take subjects :
    <ol >
      <li>Computer Science</li>
      <li>Mathematics</li>
      <li>Economics</li>
      <li>Physics</li>
    </ol>
    
  </p>
  <p>
    she also doing some additional courses:
    <ul>
      <li>kubernetes</li>
        <li>Docker</li>
        <li>linux</li>
        <li>Git</li>
      
    </ul>

     </p>
  



         <Hello ></Hello> 
        </div> 
} 
/*

<<<<<<< HEAD
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br>Updated by Ghazal Aroosa and also created by me..</br>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> e5780d6806eb400e031b547b83c17f27b2d451d9
}*/

export default App;
