import React, { Component } from 'react';
export default class NameListing extends Component {
  constructor(props) {
    super(props)

    this.passToInvitationListingsListingToDelete = this.passToInvitationListingsListingToDelete.bind(this)
    this.openToggle = this.openToggle.bind(this)
  }
  passToInvitationListingsListingToDelete(event) {
    event.preventDefault()
    this.props.sendListingToBeDeletedToParent(this.props.item)

  }
  openListing(event) {
    event.preventDefault()
    this.props.showListing(this.props.item)
  }

  openToggle(event){
    this.props.toggle(event)
  }



  render() {
    // console.log(this.props.item)
    return (
      <div className='name_listings'>
        <input className='listing_checkbox' type="checkbox" value={this.props.item._id} onClick={this.openToggle}/>

        <button
          className='listing_name'
          onClick={this.openListing.bind(this)}>{this.props.item.people[0].name}
        </button>
          RSVP: {this.props.item.rsvp}

        <button
          className='listing_delete'
          onClick={this.passToInvitationListingsListingToDelete}
          title={"Delete Invitation for " + this.props.item.people[0].name}
        >X</button>
      </div>
    );
  }
}