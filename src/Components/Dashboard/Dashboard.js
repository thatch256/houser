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

    render() {
        return (
            <div>
                {this.state.houses.map(house => {
                    return (
                        <House key={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip}/>
                    )
                })}
                <Link to='/Wizard'><button>Add New Property</button></Link>
            </div>
            
        )
    }
}

export default Dashboard