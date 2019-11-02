import React, { Component } from 'react';

class HoneyPot extends Component {
    render() {
        return (
            <div className="honeyPot">
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="AE2UR6ZW733JW" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form> */}
                <p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="XXKAC4CLGC4HY" />
                    <input type="image" className="honeypot-img" src="https://marclytle.com/wp-content/themes/new/images/honeypot-plain.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                    {/* <img className="honeypot-img" src="https://marclytle.com/wp-content/themes/new/images/honeypot-plain.svg" /> */}
                
            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis convallis metus nec mattis. Sed bibendum justo mattis placerat ornare. Donec vehicula tellus ac tristique venenatis. Nulla ipsum dui, auctor vel tincidunt cursus, maximus non nisi. Sed sit amet vestibulum turpis. Nullam ut efficitur nisi, quis hendrerit dui. Ut vel scelerisque felis, ac tincidunt turpis. Proin non sapien urna. Aenean molestie ex justo, vitae blandit enim convallis eget. Mauris gravida eros et magna dapibus dapibus. Phasellus vel ultricies purus. Vestibulum interdum vestibulum arcu, et consequat justo scelerisque et. Vestibulum condimentum ante erat, in gravida urna varius sed. Nullam fringilla ligula ante.
               </p> 

            </div >
        );
    }
}

export default HoneyPot;
