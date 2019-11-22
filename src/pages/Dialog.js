import React, { Component } from 'react';


let dialogStyles = {
    width: '550px',
    maxwidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    color: '#000',
    textAlign: 'center',
    maxHeight: '100%'
};

let dialogButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'center'
};

export default class Dialog extends Component {

    chooseNo(event) {
        event.preventDefault()
        this.props.closeDialog()
    }
    chooseYes(event) {
        event.preventDefault()
        this.props.closeDialogAndDelete()
    }

    render() {
        let dialog = (
            <div style={dialogStyles}>
                <div>Delete {this.props.person}'s invitation?</div>
                <button onClick={this.chooseYes.bind(this)} style={dialogButtonStyles}>yes</button>
                <button onClick={this.chooseNo.bind(this)} style={dialogButtonStyles}>no</button>
            </div>
        )
        if (!this.props.dialogOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}