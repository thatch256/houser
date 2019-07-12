import React, {Component} from 'react'

class House extends Component {
    
   render() {
    let {name, address, city, state, zip} = this.props    
    return (
            <div>
                {name}
                {address}
                {city}
                {state}
                {zip}
                <button>Delete</button>
            </div>
        )
    }
}

export default House