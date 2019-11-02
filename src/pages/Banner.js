import React, { Component } from 'react';
import logo from '../images/logo2_m.png'
import us from '../images/us_small.jpg'

class Banner extends Component {
    render() {
        return (
            <div className='banner_all'>
                <div className='banner' >
                    <div className='inner_banner' >
                        <div><img src={logo} alt="Michelle and Marc"/></div>

                    </div>


                </div >
                <div className='banner_date'>
                    April 18, 2020 -  Story, IN
                </div>
                <div className='us'>
                    <div><img  className='us_image' src={us} alt="Michelle and Marc"/></div>
                    <div className='us_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis convallis metus nec mattis. Sed bibendum justo mattis placerat ornare. Donec vehicula tellus ac tristique venenatis. Nulla ipsum dui, auctor vel tincidunt cursus, maximus non nisi. Sed sit amet vestibulum turpis. Nullam ut efficitur nisi, quis hendrerit dui. Ut vel scelerisque felis, ac tincidunt turpis. Proin non sapien urna. Aenean molestie ex justo, vitae blandit enim convallis eget. Mauris gravida eros et magna dapibus dapibus. Phasellus vel ultricies purus. Vestibulum interdum vestibulum arcu, et consequat justo scelerisque et. Vestibulum condimentum ante erat, in gravida urna varius sed. Nullam fringilla ligula ante.</div>
                </div>
            </div>
        );
    }
}

export default Banner;
