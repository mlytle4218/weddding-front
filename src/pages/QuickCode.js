import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios'
import Song from './Song'

class QuickCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            token: null,
            id: null,
            songs: [],
            people: []
        }
        this.handleChangeValue = this.handleChangeValue.bind(this)
        this.handleChangeValueDelete = this.handleChangeValueDelete.bind(this)
        this.handleAddSong = this.handleAddSong.bind(this)
        this.handleUpdateWillAttend = this.handleUpdateWillAttend.bind(this)
        this.handleUpdatePlusOne =  this.handleUpdatePlusOne.bind(this)

    }
    componentDidMount() {
        let tokenCookie = Cookies.get('invToken');
        let codeCookie = Cookies.get('invCode');
        let idCookie = Cookies.get('invId')
        this.getInvitation(idCookie, tokenCookie)
        this.setState({ token: tokenCookie, code: codeCookie, id: idCookie })
    }
    handleChangeValue(value, index) {
        this.setState((prevState) => {
            let songs = prevState.songs.map((item, j) => {
                if (j === index) {
                    return value;
                } else {
                    return item
                }
            });

            return { songs };
        })
    }
    handleChangeValueDelete(index) {
        this.setState((prevState) => {
            let songs = prevState.songs.filter((item, j) => {
                if (j !== index) {
                    return item
                }
            });
            return {
                songs,
            }
        })
    }
    getInvitation(id, token) {
        axios
            .get(
                "/api/invitation/" + id,
                { headers: { 'Authorization': "Bearer " + token } }

            ).then((response) => {
                this.setState({ ...response.data })
            }).catch((error) => {
                console.log(error)
            })
    }
    handleUpdateWillAttend(event) {
         if (event.target.checked){
            this.setState({
                ...this.state,
                rsvp: parseInt(this.state.people.length)
            })
        } else {
            this.setState({
                ...this.state,
                rsvp: 0
            })

        }
        console.log(this.state.rsvp)
    }
    handleUpdatePlusOne(event) {
        if (event.target.checked) {
            this.setState({
                ...this.state,
                rsvp: this.state.rsvp +1
            })
        } else {
            this.setState({
                ...this.state,
                rsvp: this.state.rsvp -1
            })

        }
    }

    handleChange(event) {
        let value
        let check 
        switch (event.target.name) {
            case "email":
                value = event.target.value
                break
            case "will_attend":
                if (event.target.checked) {
                    value = this.state.rsvp + 1
                } else {
                    value = this.state.rsvp - 1
                }
                check = event.target.checked
                break
            case "plus_one":
                value = parseInt(event.target.value)
                break
            default:
                value = event.target.value

        }
        if (check){
            this.setState({
                ...this.state,
                [event.target.name]: check,
                rsvp: value
            })
        } else {
            this.setState({
                ...this.state,
                [event.target.name]: value
            })
        }
    }
    handleAddSong(event) {
        event.preventDefault()
        let songsTemp = this.state.songs;
        songsTemp.push({ "name": "" })
        this.setState({ songs: songsTemp })
    }
    handleSubmit(event) {
        event.preventDefault()
        let songs = this.state.songs.filter((item, j) => {
            if (item.name !== "") {
                return item
            }
        });
        axios
            .put(
                "/api/invitation/" + this.state.id,
                {
                    "email": this.state.email,
                    "songs": songs,
                    "rsvp": this.state.rsvp
                },
                { headers: { "Authorization": "Bearer " + this.state.token } }
            ).then((response) => {
                this.setState({ ...response.data })
            }).catch((error) => {
                console.log(error)
            })
    }



    render() {
        return (
            <div className="guestForm">
                <div className="guestForm-form">
                {this.state.id ?

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <p>Please enter you email for possible updates and information: </p>

                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            id="email"
                            defaultValue={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        />
                        <br></br>
                        <br></br>
                        <p>Please let us know if you will be attending:</p>
                        <label >Will Attend
                            <input
                                type="checkbox"
                                name="will_attend"
                                id="will_attend"
                                checked = {this.state.rsvp >= 1}
                                onChange={this.handleUpdateWillAttend.bind(this)}
                            />
                        </label>


                        {  this.state.rsvpAllowed - this.state.people.length == 1   ?
                            <label>Plus 1
                                <input
                                    type="checkbox"
                                    name="plus_one"
                                    id="plus_one"
                                    checked = {this.state.rsvpAllowed == this.state.rsvp}
                                    onChange={this.handleUpdatePlusOne.bind(this)}
                                />
                            </label>
                            : null}



                        <p>Please let us know which songs you would like to hear at our reception:</p>
                        {this.state.songs.map((song, index) => {
                            return (
                                <Song
                                    key={index}
                                    index={index}
                                    song={song}
                                    handleChangeValue={this.handleChangeValue}
                                    handleChangeValueDelete={this.handleChangeValueDelete}
                                />)
                        })}
                        {this.state.songs.length < 5 ? <button  onClick={this.handleAddSong.bind(this)}>Add Song</button > : null}
                        <br></br>



                        <button className="guestFormSubmit" type="submit">Save changes</button>
                    </form> : null}
                </div>
            </div >
        );
    }
}

export default QuickCode;
