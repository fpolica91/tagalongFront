import React, { Component } from 'react';


const Context = React.createContext()

class Provider extends React.Component {

    state = {
        users: [],
        user: {},
        events: []
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state
            }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export { Context, Provider }