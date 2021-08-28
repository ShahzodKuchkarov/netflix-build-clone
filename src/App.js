import React from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { useSelector } from 'react-redux'
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector((state) => state?.user?.user);
  console.log(user)



  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;
