import React, { useState, useEffect, useContext } from 'react';
import { Context } from './customHooks/context'
// import * as io from 'socket.io-client'
// import { Header } from './Header';
// import { socket } from './Header'
import Login from "./components/Login"
import { Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/Signup';
import UpdateUser from './components/update.user';
import RequireAuthentication from './services/route.protection';
import CreateEvent from './components/create.event';

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

//   return (
//     <Context.Consumer>
//       {(context) => {
//         return <p>users</p>
//       }}

//     </Context.Consumer>
//   )

// }

const App = () => {

  const dataContext = useContext(Context)
  const { count, increment } = dataContext


  return (
    <div>
      <p>Current cout is {count}</p>
      <button onClick={() => increment("vaca")} >  Increment </button>
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route
          exact path='/signup'
          component={SignUp}
        />
        <Route
          exact path="/createEvent/:id"
          // component={props => < RequireAuthentication Component={{...props} CreateEvent} />}
          component={CreateEvent}
        />

      </Switch>

      <Link to="/createEvent/5ded46e23c53f014c9bfd425">Create Event</Link>

    </div>
  )

}

export default App;

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