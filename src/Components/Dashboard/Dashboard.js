import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
    axios.get('/api/houses')
    .then(res => {
        this.setState({
            houses: res.data
        })
    })
    .catch(err => {
        console.log('Server error', err)
    })
    }

    deleteHouse = id => {
        axios.delete(`/api/houses/${id}`)
        .then(res => {
            this.getHouses()
        })
        .catch(err => console.log("Can't delete house", err))
    }

    render() {
        return (
            <div>
               <section id='left-block-one'></section>
                <div id='dashboard-container'>Dashboard
                <Link to='/Wizard'><button>Add New Property</button></Link>
                <section id='right-block-one'></section>
                </div>
                    <section id='left-block-2'></section>
                    <div> Home Listings</div>
                        <div id='home-information-container'>
                {this.state.houses.map(house => {
                    return (
                        <House key={house.id} id={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} deleteHouse={this.deleteHouse}/>
                    )
                })}
                <section id='right-block-two'></section>
                </div>
            </div>
            
        )
    }
}

export default Dashboard