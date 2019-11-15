import React, { Component } from 'react';
import logo from '../images/logo2_m.png';
// import us from '../images/us_small.jpg';
import us from '../images/outside.jpg'
import background from '../images/5f846f7f.png';

let date_styling = {
    backgroundImage: `url(${background})`
}

class Banner extends Component {
    render() {
        return (
            <div className='banner_all'>
                <div className='banner' >
                    <div className='inner_banner' >
                        <div><img src={logo} alt="Michelle and Marc"/></div>

                    </div>


                </div >
                <div className='banner_date' style={date_styling}>
                    <p>April 18, 2020 -  Story, IN</p>
                </div>
                <div className='us'>
                    <div>
                        <img  className='us_image' src={us} alt="Michelle and Marc"/>
                    </div>

                    <div className='us_text'>
                        Thank you for visiting out wedding website. We have puth this together to share our story, help our guests, and provide directions to relavent locations for the ceremony. We are very excited to be getting married and to share with each of you.
                        <br/>
                        <br/>
                        We met almost twenty years ago when we were both on air talent for local radio stations. We met in passing and over time found ourselves together more and more. We made a bond that has held all this time.
                        <br/>
                        <br/>
                        And now we are making it official and look forward to sharing it with you all.
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Banner;
