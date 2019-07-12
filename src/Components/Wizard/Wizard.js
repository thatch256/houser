import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        } 
        this.handleNameChange = this.handleNameChange.bind(this)
        this.addHouse = this.addHouse.bind(this)
    } 

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        })
    } 

    handleAddressChange = e => {
        this.setState({
            address: e.target.value
        })
    }

    handleCityChange = e => {
        this.setState({
            city: e.target.value
        })
    }

    handleStateChange = e => {
        this.setState({
            state: e.target.value
        })
    }

    handleZipChange = e => {
        this.setState({
            zip: e.target.value
        })
    }

    addHouse() {
        let {name, address, city, state, zip} = this.state
        axios.post('/api/house', {name: name, address: address, city: city, state: state, zip: zip})
        .then(res => {
            
        })
        .catch(err => console.log("Can't add house", err))
    }

   render() {
        return (
            <div>
                <input onChange={this.handleNameChange} placeholder='Property Name'></input>
                <input onChange={this.handleAddressChange} placeholder='Address'></input>
                <input onChange={this.handleCityChange} placeholder='City'></input>
                <input onChange={this.handleStateChange} placeholder='State'></input>
                <input onChange={this.handleZipChange} placeholder='Zip'></input>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    } 
}

export default Wizard