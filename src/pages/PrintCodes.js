import React, { Component } from 'react';
import QRCode from 'qrcode.react';

var Code = ({ code }) => {
  let url = 'https://michelleandmarc.com/quick_code/' + code.quickCode
  let numPeople = code.people.length
  let peopleListing = ""
  let plus = null
  code.people.forEach((person, itr)=>{
    if (numPeople === itr + 1 ) {
      peopleListing = peopleListing + " " +person.name
    } else {
      peopleListing = peopleListing + " " + person.name +", "
    }
  })
  if (code.rsvpAllowed > numPeople) {
    plus = code.rsvpAllowed - numPeople
  }
  return (
    <div className="codeListing page-break">
      <div className="codeQR"><QRCode value={url} /></div>
      <div className="codeText">
        <p>Invitee{ numPeople > 1 ? 's' : null}: {peopleListing}</p>
        {plus && <p>Allowed to bring +{plus}</p>}
        <p>Guest Login ID: {code.quickCode}</p>
        <p>Password: {code.password}</p>
        <p>Use the QR code and password or go to michelleandmarc.com and use guest login</p>
      </div>
    </div>
  )
}

export default class PrintCodes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: []
    }
    console.log('inprinstcodes')
  }
  render() {
    
    return (
      <div className="printCodes">
        {this.props.location.appState && 
          this.props.location.appState.response.data.map((item,itr)=>{
            return (<Code code={item} />)
          }) 
        }

      </div>
    );
  }
}