import {useState} from 'react';
import './App.css';
import Axios from 'axios';
function App() {
  const [from,setFrom]=useState();
  const [subject,setSubject]=useState();
  const [textcontent,setTextContent]=useState();

  const sendEmail=()=>{
    Axios.post('http://localhost:3002/email',({from:from,subject:subject,textcontent:textcontent}))
  }

  return (
    <div className="App">
      <br/><br/>
      <h2>Contact Me Form:</h2>
      <br/><br/>
      <input className='in' style={{width:800}} type='text' onChange={(e)=>{setFrom(e.target.value)}} placeholder='Enter Your Gmail...'/><br/><br/><br/>
      <input className='in' style={{width:800}} type='text' onChange={(e)=>{setSubject(e.target.value)}} placeholder='Enter Email Subject...'/><br/><br/><br/>
      <input className='in' style={{width:800}} type='text' onChange={(e)=>{setTextContent(e.target.value)}} placeholder='Enter the TextContent...'/><br/><br/><br/>
      <button onClick={()=>{sendEmail()}}>Send Email</button>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      
    </div>
  );
}

export default App;
