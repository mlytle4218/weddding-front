import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Banner from './Banner';
import Location from './Location'
import Events from './Events'
import Lodgings from './Lodgings'
import Honey_Pot from './HoneyPot'
import QuickCode from './QuickCode'
import Footer from './Footer'
import SignIn from './SignIn'
import QuickCodeLogin from './QuickCodeLogin';
import 'bootstrap/dist/css/bootstrap.css';
import '../custom.scss';
import { ProtectedRouteInv } from './ProtectedRouteInv';
import { ProtectedRouteUser } from './ProtectedRouteUser';
import auth from './AuthInv';
import Invitation_Listings from './InvitationListings';
import Listing from './Listing';
import GuestLogin from './GuestLogin';
import InvLogout from "./InvLogout";
import PrintCodes from "./PrintCodes";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.isAuth()
        }
        this.updateLogin = this.updateLogin.bind(this)
    }
    updateLogin(loggedInBool) {
        this.setState({
            loggedIn: loggedInBool
        })
    }
    toggleMenu(){
        console.log('menu')
    }


    render() {

        return (
            <Router>
                <div className="text_placement hidden-for-print">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/location">location</Link></li>
                        <li><Link to="/lodgings">lodgings</Link></li>
                        <li><Link to="/honey_pot">honey pot</Link></li>

                        {this.state.loggedIn ?
                            <li><Link to="/quick_code_authd">guest info</Link></li> 
                            : <li><Link to="/guestSignIn">guest login</Link></li>
                        }
                        {this.state.loggedIn ? 
                            <li><Link to="/guestSignOut">logout</Link></li>
                            : null
                        }
                    </ul>
                </div>





                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Banner} />
                        <Route path="/location" component={Location} />
                        <Route path="/events" component={Events} />
                        <Route path="/lodgings" component={Lodgings} />
                        <Route path="/honey_pot" component={Honey_Pot} />
                        <Route path='/quick_code/:code' render={(props) => (<QuickCodeLogin {...props} updateLogin={this.updateLogin} />)} />
                        <ProtectedRouteInv path="/quick_code_authd/" component={QuickCode} />
                        <Route path="/signin" component={SignIn} />
                        {/* <Route path="/guestSignIn" component={GuestLogin} /> */}
                        <Route path="/guestSignIn" render={(props) => (<GuestLogin {...props} updateLogin={this.updateLogin} />)} />
                        <Route path="/guestSignOut" render={(props) => (<InvLogout {...props} updateLogin={this.updateLogin} />)} />
                        <ProtectedRouteUser path="/master_listing_control/" component={Invitation_Listings} />
                        <ProtectedRouteUser path="/single_listing_update/:id" component={Listing} />
                        <ProtectedRouteUser path="/print_codes/" component={PrintCodes} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                <Footer />

            </Router>
        );
    }
}

function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No Match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default App;
