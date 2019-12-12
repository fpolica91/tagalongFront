import React, { useState, useEffect, useContext } from 'react';
import { Context } from './customHooks/context'
// import * as io from 'socket.io-client'
// import { Header } from './Header';
// import { socket } from './Header'
import Login from "./components/Login"
import { Switch, Route } from 'react-router-dom'
import SignUp from './components/Signup';

// const socket = io('http://localhost:5000')

// const App = () => {

//   // const [_users, setUsers] = useState()

//   // const theme = data.users.push(_users)

//   // useEffect(() => {
//   //   socket.emit('init_communication')
//   //   socket.on('users', get_users)
//   // }, [])

//   // const get_users = (users) => {
//   //   setUsers(users)

//   // }

const App = () => {

  return (
    <Context.Consumer>
      {(context) => {
        return (
                <div>
                  <Switch>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/signup' component={SignUp}></Route>
          
                  </Switch>
          
                </div>
    
              );
      }}
    </Context.Consumer>
  )}

export default App;

// const App = () => {

//   const dataContext = useContext(Context)
//   const { count, increment } = dataContext


//   return (
//     <div>
//       <p>Current cout is {count}</p>
//       <button onClick={() => increment("vaca")} >  Increment </button>
//     </div>
//   )

// }

// class App extends Component {
//   state = {
//     users: [],
//     events: []
//   }

//   componentDidMount() {
//     
//     socket.on('users', this.getUsers)
//     socket.on('events', this.getEvents)
//     socket.on('reload', this.reFetch)
//   }

//   reFetch = () => socket.emit('init_communication')

//   getUsers = (users) => {
//     console.log("these are the users", users)
//     this.setState({
//       users: users
//     })
//   }

//   getEvents = (events) => {

//     this.setState({
//       events: events
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/login' component={Login}></Route>
//           <Route exact path='/signup' component={SignUp}></Route>

//         </Switch>

//       </div>
//     );
//   }
// }

// export default App;


// <Login />