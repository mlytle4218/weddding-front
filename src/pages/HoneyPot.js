import React, { Component } from 'react';

class HoneyPot extends Component {
    render() {
        return (
            <div className="honeyPot">
                <p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="XXKAC4CLGC4HY" />
                        <input type="image" className="honeypot-img" src="https://marclytle.com/wp-content/themes/new/images/honeypot-plain.svg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>


                    <p>
                        We have been together for a while and don't really need anything to start our married lives.
                    </p>
                    <p>
                    So, in lieu of a specific list of gifts, we just have a little honey moon honey pot. If you want to gift us something, but don't have a clue, throw us a few bucks to help pay for our trip to Europe.
                    </p>
                    
               </p>

            </div >
        );
    }
}

export default HoneyPot;
