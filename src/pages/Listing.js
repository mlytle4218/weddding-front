import React, { Component } from 'react';

var Address = ({ address, onChangeAddress, errors }) => {
  return (
    <div>
      <div>
        <label htmlFor="line1">line 1</label>
        <input
          type="text"
          name="line1"
          value={address.line1}
          onChange={onChangeAddress}
          required
        />
        <br></br>
      </div>
        <div>
        <label htmlFor="line2">line 2</label>
          <input
            type="text"
            name="line2"
            value={address.line2}
            onChange={onChangeAddress}
          />
          <br></br>
        </div> 
      <div>
        <input
          type="text"
          name="city"
          defaultValue={address.city}
          onChange={onChangeAddress}
          required
        />
        <input
          type="text"
          name="state"
          defaultValue={address.state}
          onChange={onChangeAddress}
          required
        />
        <input
          type="text"
          name="zip"
          defaultValue={address.zip}
          onChange={onChangeAddress}
          required
        /> </div>
    </div>
  )
}
var People = ({ person, onChangePeople, onClickDelete }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        defaultValue={person}
        onChange={onChangePeople}
        required
      />
      <button onClick={onClickDelete}>X</button>
    </div>
  )
}
var Songs = ({ song, onChangeSong, onClickDelete }) => {
  return (
    <div>
      <input
        type="text"
        name="line1"
        defaultValue={song}
        onChange={onChangeSong}
      />
      <button onClick={onClickDelete}>X</button>
    </div>
  )
}
export default class Listing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {
        addressLine1Error : false
      }

    }
    this.passToInvitationListingsListingToUpdateState = this.passToInvitationListingsListingToUpdateState.bind(this)
    this.passToInvitationListingsListingToUpdateBackEnd = this.passToInvitationListingsListingToUpdateBackEnd.bind(this)
  }
  warnSaveNeeded() {
    this.props.item.updated = false
  }

  handleAddressChange(event) {
    switch (event.target.name) {
      case "line1":
        this.props.item.address.line1 = event.target.value
        break
      case "line2":
        this.props.item.address.line2 = event.target.value
        break
      case "city":
        this.props.item.address.city = event.target.value
        break
      case "state":
        this.props.item.address.state = event.target.value
        break
      case "zip":
        this.props.item.address.zip = event.target.value
        break
      default:
        break
    }
    this.warnSaveNeeded()
    this.props.sendListingToBeUpdatedToParent(this.props.item)
  }
  passToInvitationListingsListingToUpdateState(event) {
    switch (event.target.name) {
      case "email":
        this.props.item.email = event.target.value
        break
      case "rsvp":
        this.props.item.rsvp = parseInt(event.target.value)
        break
      case "allowed":
        this.props.item.rsvpAllowed = parseInt(event.target.value)
        break
      default:
        break
    }
    this.warnSaveNeeded()
    this.props.sendListingToBeUpdatedToParent(this.props.item)
  }

  testForErrors(){
    let result = true
    let listing = this.props.item
    if (listing.address.line1.length < 1){
      result = false
      // this.state.addressLine1Error = true
      this.setState({addressLine1Error: true})
    }
    return result
  }

  passToInvitationListingsListingToUpdateBackEnd(event) {
    event.preventDefault()
    this.props.item.updated = true
    this.props.item.songs = this.props.item.songs.filter(
      item => item.name !== ""
    )
    this.props.item.people = this.props.item.people.filter(
      item => item.name !== ""
    )
      this.props.sendListingToBeUpdatedInBackend(this.props.item)
    // if (this.testForErrors()){
    //   this.props.sendListingToBeUpdatedInBackend(this.props.item)
    // }
    
  }
  addToSongs(event) {
    event.preventDefault()
    this.warnSaveNeeded()
    this.props.item.songs.push({ "name": "" })
    this.props.sendListingToBeUpdatedToParent(this.props.item)
  }
  handleSongChange(itr, event) {
    event.preventDefault()
    this.warnSaveNeeded()
    this.props.item.songs[itr].name = event.target.value
  }
  removeFromSongs(itr, event) {
    event.preventDefault()
    this.warnSaveNeeded()
    this.props.item.songs.splice(itr, 1)
    this.props.sendListingToBeUpdatedToParent(this.props.item)

  }
  addToPeople(event) {
    event.preventDefault()
    this.warnSaveNeeded()
    this.props.item.people.push({ "name": "" })
    this.props.sendListingToBeUpdatedToParent(this.props.item)
  }
  handlePeopleChange(itr, event) {
    this.warnSaveNeeded()
    this.props.item.people[itr].name = event.target.value
  }
  removeFromPeople(itr, event){
    event.preventDefault()
    this.warnSaveNeeded()
    this.props.item.people.splice(itr, 1)
    this.props.sendListingToBeUpdatedToParent(this.props.item)
  }



  render() {
    
    return (
      <div className="main-invitaion-div">
        <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          defaultValue={this.props.item.email}
          onChange={this.passToInvitationListingsListingToUpdateState}
        /></div>
        <div>
          <label htmlFor="quickCode">Quick Code</label>
        <input 
          type="text"
          name="quickCode"
          value={this.props.item.quickCode}
          onChange={this.passToInvitationListingsListingToUpdateState}
        /></div>
       <div>
        <label htmlFor="email">Max RSVP</label>
        <input
          type="number"
          name="allowed"
          defaultValue={this.props.item.rsvpAllowed}
          min={0}
          onChange={this.passToInvitationListingsListingToUpdateState}
        /></div>
        <div>
        <label htmlFor="email">RSVP</label>
        <input
          type="number"
          name="rsvp"
          defaultValue={this.props.item.rsvp || 0}
          min={0}
          max={this.props.item.rsvpAllowed}
          onChange={this.passToInvitationListingsListingToUpdateState}
        /></div>
        <p>Address</p>
        {this.props.item.address ?
        <Address 
          address={this.props.item.address} 
          onChangeAddress={this.handleAddressChange.bind(this)} 
          errors={this.state.errors}
          /> :
          null}
        <p>People</p>
        {this.props.item.people.map((each, itr) => {
          return (
            <People
              person={each.name}
              key={itr}
              onChangePeople={this.handlePeopleChange.bind(this, itr)}
              onClickDelete={this.removeFromPeople.bind(this, itr)}
            />
          )
        })}
        <button onClick={this.addToPeople.bind(this)}>Add Person</button>
        <p>Songs</p>
        {this.props.item.songs.map((each, itr) => {
          return (
            <Songs
              song={each.name}
              key={itr}
              onChangeSong={this.handleSongChange.bind(this, itr)}
              onClickDelete={this.removeFromSongs.bind(this, itr)}
            />
          )
        })}
        <div><button onClick={this.addToSongs.bind(this)}>Add Song</button></div>
        <button 
          className={this.props.item.updated ? "updated" : "update"} 
          onClick={this.passToInvitationListingsListingToUpdateBackEnd}
          >Save Invitation</button>
      </div>
    );
  }
}