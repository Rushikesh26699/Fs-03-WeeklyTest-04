import React from 'react';
import "./Body.css"

function Body(props) {
    return (
        <div className='body'>
           
              <h1 style={{margin:0, letterSpacing:"5px",fontSize:"55px"}}>Your Awesome Business Theme</h1> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum vitae optio <br/> ducimus pariatur dicta, in laudantium iure dolores!</p>
              <button>Read More</button>
           
        </div>
    );
}

export default Body;