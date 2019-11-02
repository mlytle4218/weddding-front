import React, { Component } from 'react';
export default class NameListing extends Component {
  constructor(props) {
    super(props)

    this.passToInvitationListingsListingToDelete = this.passToInvitationListingsListingToDelete.bind(this)
   }
   passToInvitationListingsListingToDelete(event) {
    event.preventDefault()
    this.props.sendListingToBeDeletedToParent(this.props.item)

  }
  openListing(event){
    event.preventDefault() 
    this.props.showListing(this.props.item)
  }



  render() {
    return (
        <div> <button 
          onClick={this.openListing.bind(this)}>{this.props.item.people[0].name}
        </button> 
        
        <button 
          onClick={this.passToInvitationListingsListingToDelete} 
          title={"Delete Invitation for " + this.props.item.people[0].name} 
          >X</button>
    </div>
    );
  }
}