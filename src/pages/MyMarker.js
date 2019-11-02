import React, { Component } from 'react';
import { Marker, InfoWindow} from 'react-google-maps';
class MyMarker extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }
    toggleOpen = () => {
        this.setState({
            open: true
        })
    }
    toggleClosed = () => {
        this.setState({
            open: false
        })
    }
    openDirections = () =>{
        console.log(this.props.place.locationUrl)
        window.location.href = this.props.place.locationUrl
    }
    render () {
        return (
            <Marker
                key={this.props.itr}
                position={this.props.place}
                label={this.props.place.name}
                onClick={()=> this.toggleOpen()}
            >
            {this.state.open  &&
                <InfoWindow onCloseClick={this.toggleClosed}>
                    <div className="info_window">
                    <div>{this.props.place.name}</div>
                    <div>{this.props.place.description}</div>
                    <div>
                        <a href="#" onClick={this.openDirections}>Open map</a>
                    </div>
                    </div>
                </InfoWindow>
            }
            </Marker>
        )
    }
}
export default MyMarker;