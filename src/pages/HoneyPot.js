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
                        Hey, everybody!! Tricked Ya. This isn't really a registry. We decided that we'd much rather have an amazing experience together, so, please help us go on our honeymoon to Italy and Spain!! Grazie!!
                    </p>
                    
               </p>

            </div >
        );
    }
}

export default HoneyPot;
