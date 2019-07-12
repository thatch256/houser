import React, {Component} from 'react'

class House extends Component {
   
   handleDelete = id => {
       this.props.deleteHouse(id)
   } 

   render() {
    let {name, address, city, state, zip} = this.props    
    return (
            <div id='home-information'>
                Property Name: {name}
                Address: {address} 
                City: {city} 
                State: {state} 
                Zip: {zip} 
                <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default House