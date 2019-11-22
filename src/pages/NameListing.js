import React, { Component } from 'react';
import Dialog from './Dialog'




export default class NameListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
            dialogOpen: false
    }

    this.passToInvitationListingsListingToDelete = this.passToInvitationListingsListingToDelete.bind(this)
    this.openToggle = this.openToggle.bind(this)
    this.showDialog = this.showDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.closeDialogAndDelete = this.closeDialogAndDelete.bind(this)
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
  showDialog(event) {
    event.preventDefault()
    this.setState({
      dialogOpen: true
    })
  }
  closeDialog() {
    this.setState({
      dialogOpen: false
    })
  }
  closeDialogAndDelete(){
    this.props.sendListingToBeDeletedToParent(this.props.item)
    this.setState({
      dialogOpen: false
    })
  }





  render() {
    return (
      <div className='name_listings'>
        <input className='listing_checkbox' type="checkbox" value={this.props.item._id} onClick={this.openToggle}/>

        <button
          className='listing_name'
          onClick={this.openListing.bind(this)}>{this.props.item.people[0].name}
        </button>
        {this.props.item.rsvp < 0 ? 'Not attending' : "Attending: " + this.props.item.rsvp}

        <button
          className='listing_delete'
          // onClick={this.passToInvitationListingsListingToDelete}
          onClick={this.showDialog}
          title={"Delete Invitation for " + this.props.item.people[0].name}
        >X</button>
        <Dialog 
          dialogOpen={this.state.dialogOpen} 
          closeDialog={this.closeDialog}
          closeDialogAndDelete = {this.closeDialogAndDelete}
          person={this.props.item.people[0].name}
        />
      </div>
    );
  }
}