import React, { useContext, Suspense, lazy } from 'react';
import { Context } from './customHooks/context'
import Login from "./components/Login"
import { Switch, Route } from 'react-router-dom'
import SignUp from './components/Signup';
import UpdateUser from './components/update.user';
// import RequireAuthentication from './services/route.protection';
import CreateEvent from './components/create.event';
const Profile = lazy(() => import('./components/user.profile'))
const Links = lazy(() => import('./components/link.routes'))


const App = () => {
  const dataContext = useContext(Context)
  return (
    <div>

      <Suspense fallback={<div>...Loading</div>}>
        <Links />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path='/update/:id' component={UpdateUser} />
          <Route exact path="/createEvent/:id"
            // this doesnt work with the form
            // component={props => < RequireAuthentication Component={{...props} CreateEvent} />}
            component={CreateEvent}
          />
        </Switch>
      </Suspense>
    </div>
  )

}

export default App;

