import React from 'react';
import "./Features.css"

function Features() {
    return (
        <div className='features'>
            <div className='f-title'>
                <h1 style={{margin:0}}>Our Features</h1>
            </div>
            <div className='f-content'>
                <div className='fc-1 fc'>
                   <div className='circle'></div>
                   <div className='circle2'>
                   <h4>Fully Responsive</h4>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus quasi dicta iste sed cum non sint rem molestias consequuntur?</p>
                   <p style={{color:"blue"}}>Read More</p>
                   </div>
                </div>
                <div className='fc-2 fc'>
                <div className='circle'></div>
                   <div className='circle2'>
                   <h4>Fully Responsive</h4>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus quasi dicta iste sed cum non sint rem molestias consequuntur?</p>
                   <p style={{color:"blue"}}>Read More</p>
                   </div>
                </div>
                <div className='fc-3 fc'>
                <div className='circle'></div>
                   <div className='circle2'>
                   <h4>Fully Responsive</h4>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus quasi dicta iste sed cum non sint rem molestias consequuntur?</p>
                   <p style={{color:"blue"}}>Read More</p>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Features;