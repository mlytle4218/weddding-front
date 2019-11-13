import React, { Component } from 'react';
import NameListing from './NameListing';
import axios from 'axios';
import auth from './AuthUser'
import Listing from './Listing';

export default class Invitation_Listings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authToken: auth.isAuth(),
            invitation_data: [],
            print_array: []
        }
        this.sendListingToBeDeletedToParent = this.sendListingToBeDeletedToParent.bind(this)
        this.sendListingToBeUpdatedToParent = this.sendListingToBeUpdatedToParent.bind(this)
        this.sendListingToBeUpdatedInBackend = this.sendListingToBeUpdatedInBackend.bind(this)
        this.toggle = this.toggle.bind(this)
        this.showListing = this.showListing.bind(this)
    }
    componentDidMount() {
        this.get_invitations(this.state.authToken)
    }

    get_invitations(token) {
        axios.get(
            '/api/invitation',
            { headers: { "Authorization": "Bearer " + token } }
        ).then(response => {
            console.log(response)
            response.data.sort((a,b) => 
                (a.people[0].name > b.people[0].name) ? 1 : -1
            )
            response.data.forEach((item) => {
                item.show = false;
                item.updated = true;
            })
            this.setState({
                invitation_data: response.data,
            })
        }).catch(error => {
            console.log(error)
        })
    }
    create_invitation(token, listing) {
        axios.post(
            "/api/invitation/",
            listing,
            { headers: { "Authorization": "Bearer ".concat(token) } }
        ).then(response => {
            if (response.data._id) {
                response.data.show = false;
                response.data.updated = true
                let tempState = this.state.invitation_data.concat(response.data)
                this.setState({
                    invitation_data: tempState,
                })
            }

        }).catch(error => {
            console.log(error)
        })
    }
    delete_invitation(token, listing) {
        axios.delete(
            "/api/invitation/".concat(listing._id),
            { headers: { "Authorization": "Bearer ".concat(token) } }
        ).then(response => {
            // console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    print_invitations(token, invitations){
        axios.put(
            '/api/print/codes',
            invitations,
            {headers: { "Authorization": "Bearer ".concat(token) } }
        ).then(response => {
            this.props.history.push({pathname: "/print_codes", appState: {response: response}})
        }).catch(error =>{
            console.log(error)
        })

    }
    update_invitation(token, listing) {
        axios.put(
            "/api/invitation/".concat(listing._id),
            listing,
            { headers: { "Authorization": "Bearer ".concat(token) } }
        ).then(response => {
            this.setState(
                {
                    invitation_data: this.state.invitation_data.map(
                        function (item) {
                            if (item._id === response.data._id) {
                                response.data.updated = false
                                return listing
                            } else {
                                return item
                            }
                        }
                    )
                }
            )
        }).catch(error => {
            console.log(error)
        })
    }
    sendListingToBeDeletedToParent(listing) {
        this.setState(
            {
                invitation_data: this.state.invitation_data.filter(
                    item => item._id !== listing._id
                )
            }
        )
        this.delete_invitation(this.state.authToken, listing)


    }
    sendListingToBeUpdatedToParent(listing) {
        this.setState(
            {
                invitation_data: this.state.invitation_data.map(
                    item => (item._id === listing._id ? { ...item, listing } : item)
                )
            }
        )


    }
    sendListingToBeUpdatedInBackend(listing) {
        if (listing._id) {
            this.update_invitation(this.state.authToken, listing)
        } else {
            this.create_invitation(this.state.authToken, listing)
        }
    }

    handleUpdate(event) {
        event.preventDefault()
        let newInvitation = {
            "address": {
                "line1": "",
                "line2": "",
                "city": "",
                "state": "",
                "zip": ""
            },
            "email": "",
            "people": [
                { "name": "name" }]
            ,
            "rsvp": 0,
            "rsvpAllowed": 2,
            "show": false,
            "songs": [
                { "name": "" }]
            ,
            "updated": false
        }
        this.create_invitation(this.state.authToken,newInvitation)

    }
    showListing(listing) {

        this.setState(
            {
                invitation_data: this.state.invitation_data.map(
                    item => {
                        if (item._id === listing._id) {
                            item.show = !listing.show
                        }
                        return item
                    }
                )
            }
        )
    }
    showStateInfo(event) {
        event.preventDefault()
    }
    showPrintInfo(event){
        event.preventDefault()
        this.print_invitations(this.state.authToken, this.state.print_array)
    }
    toggle(source){
        console.log(source)
        let tempState = this.state.print_array.concat(source.target.value)
        this.setState({
            print_array: tempState,
        })
    }

    render() {
        return (
            <div className="invitation_control">
                <form>
                    {this.state.invitation_data.map(
                        (item, itr) => {

                            return (
                                <div>
                                    {/* <input className='listing_checkbox' type="checkbox" value={item._id} onClick={this.toggle}/> */}
                                    <NameListing
                                        key={itr + 1000}
                                        item={item}
                                        showListing={this.showListing}
                                        sendListingToBeDeletedToParent={this.sendListingToBeDeletedToParent}
                                        toggle = {this.toggle}
                                    />
                                    {item.show ?
                                        <Listing
                                            key={itr}
                                            item={item}
                                            sendListingToBeUpdatedToParent={this.sendListingToBeUpdatedToParent}
                                            sendListingToBeUpdatedInBackend={this.sendListingToBeUpdatedInBackend}

                                        />
                                        : null}
                                </div>
                            )
                        }
                    )}
                    <button type="submit" onClick={this.handleUpdate.bind(this)}>Add New Invitation</button>
                    <button onClick={this.showPrintInfo.bind(this)}>printinfo</button>
                </form>
            </div>
        );
    }
}


