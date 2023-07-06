import React from 'react';
import "./Footer.css"

function Footer(props) {
    return (
        <div className='footer'>
            <div className='f-1 f' >
                <h4>ABOUT US</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi recusandae, nihil beatae, expedita eligendi velit illo veniam quo nobis magnam quod at reprehenderit! Veniam, vel culpa quod officia omnis sunt natus ex laboriosam =</p>
            </div>
            <div className='f-2 f'>
                <h4>RECENT POST</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero molestias eum facere nam, dolore labore aperiam autem dolor suscipit vero possimus eveniet inventore aspernatur obcaecati modi commodi voluptas eaque, aliquam atque alias asperiores reprehenderit. Assumenda labore alias consectetur placeat sit.</p>
            </div>
            <div className='f-3 f'>
            <h4>GALLERIES</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero molestias eum facere nam, dolore labore aperiam autem dolor suscipit vero possimus eveniet inventore aspernatur obcaecati modi commodi voluptas eaque, aliquam atque alias asperiores reprehenderit. Assumenda labore alias consectetur placeat sit.</p>
            </div>
        </div>
    );
}

export default Footer;