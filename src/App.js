import logo from './logo.svg';
import './App.css';
import './style.css';
import React from 'react';
import myImage from "./image3.jpg";
import MyVideo from "./myVideo.mp4";
function App() {
  return (
    <React.Fragment>
        
        <h1  className='title'>Your name here</h1><br/>

        <img src={myImage} className='style' alt="image3"/><br/>

        <img src="/image4.jpg" className='style' alt="image4"/><br/>

        <video className='videoTag'  controls>
            <source src={MyVideo} type='video/mp4' />
        </video>

    </React.Fragment>
  );
}

export default App;
