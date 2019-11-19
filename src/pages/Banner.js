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
                        We met over 20 years ago, and what started as a friendship turned quickly into love and a wonderful, weird, beautiful relationship.
                        <br/>
                        <br/>
                        Please join us as we celebrate our life together.
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Banner;
