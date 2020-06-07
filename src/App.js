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

export default App;
