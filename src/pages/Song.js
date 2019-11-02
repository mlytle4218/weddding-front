import React, { Component } from 'react';

export default class Song extends Component {
    constructor(props) {
        super(props)
        this.handleSongChange = this.handleSongChange.bind(this)
        this.handleSongDelete = this.handleSongDelete.bind(this)
    }
    handleSongChange(event) {
        event.preventDefault()
        let result = {
            "name": event.target.value
        }
        // Only add the id if it already has one.
        // Can't update on the backend with a blank _id
        if (this.props.song._id) {
            result._id = event.target.name
        }
        this.props.handleChangeValue(result, this.props.index)
    }
    handleSongDelete(event) {
        event.preventDefault()
        this.props.handleChangeValueDelete(this.props.index)

    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    defaultValue={this.props.song.name}
                    name={this.props.song._id}
                    onChange={this.handleSongChange}
                /> <button title="Delete song" onClick={this.handleSongDelete}>X</button>
            </div>

        )
    }
}