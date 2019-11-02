import React, { Component } from 'react';
import qualityInn from "../images/IN419ExteriorTemp4_1.webp"

class Gallery extends Component {
    render() {
        return (
            <div className="lodgings">
                <div className="banner_panel">
                    <div><img className="img-location" src={qualityInn} alt="" /></div>
                    <div className="text-div-outer">
                        <div className="text-div-inner">
                            <p>
                                QUALITY INN NASHVILLE - BLOOMINGTON<br></br>
                                51 Chestnut Street West<br></br>
                                Nashville, IN, 47448<br></br>
                                Phone: (812) 720-9031
                        </p>
                            <p>
                                For booking information, contact Lisa Lee<br></br>
                                Phone: (818)<br></br>
                                Email: LISA@AVETRAVELGROUP.COM
                        </p>
                        </div>

                    </div>

                </div>
                <div className="grid">
                    <span><strong>Rooms</strong></span>
                    <span><strong>Room Description</strong></span>
                    <span><strong>Dates</strong></span>
                    <span><strong>Nightly Rate</strong></span>


                    <span>1</span>
                    <span>
                        <strong>No Smoking, 1 King Bed</strong><br></br>
                        In-Room Desk, In-Room Coffee Maker, Hair Dryer, Cable/Satellite TV, Free Wireless High Speed Internet Access, Iron and Ironing Board, In-Room Air Conditioning, Free Local Calls
                    </span>
                    <span>
                        <strong>Apr 17, 2020 for 1 night</strong><br></br>
                        <strong>Apr 18, 2020 for 1 night</strong>
                    </span>
                    <span>
                        $110.50<br></br>$110.50
                    </span>

                    <span>5</span>
                    <span>
                        <strong>No Smoking, 1 King Bed</strong><br></br>
                        Sofabed-2Person, In-Room Coffee Maker, Iron and Ironing Board, Hair Dryer, In-Room Desk, Free Wireless High Speed Internet Access, In-Room Air Conditioning, Cable/Satellite TV, Free Local Calls
                    </span>
                    <span>
                        <strong>Apr 17, 2020 for 1 night</strong><br></br>
                        <strong>Apr 18, 2020 for 1 night</strong>
                    </span>
                    <span>
                        $110.50<br></br>$110.50
                    </span>


                    <span>4</span>
                    <span>
                        <strong>No Smoking, 2 Queen Beds</strong><br></br>
                        Free Wireless High Speed Internet Access, Hair Dryer, Iron&Ironing Board, In-Room Coffee Maker, In-Room Air Conditioning, Cable/Satellite TV, Free Local Calls
                    </span>
                    <span>
                        <strong>Apr 17, 2020 for 1 night</strong><br></br>
                        <strong>Apr 18, 2020 for 1 night</strong>
                    </span>
                    <span>
                        $110.50<br></br>$110.50
                    </span>

                    
                </div>
            </div >
        );
    }
}

export default Gallery;
