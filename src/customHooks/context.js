import React, { Component } from 'react';


const Context = React.createContext()

class Provider extends Component {
    render() {
        return(
        <Context.Provider>
            {this.props.children}
        </Context.Provider>)
    }
}

export default Provider