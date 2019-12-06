import React, { Component } from 'react';


const Context = React.createContext()

class Provider extends React.Component {
    render() {
        <Context.Provider>
            {this.props.children}
        </Context.Provider>
    }
}