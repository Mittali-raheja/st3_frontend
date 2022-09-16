import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Newarrivals from './components/Newarrivals';
import Popular from './components/Popular';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './components/firebase';
import Checkout from './components/Checkout';

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const user = true;


  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          name: userAuth.user.displayName,
          email: userAuth.user.email,
          uid: userAuth.user.uid,
        }))

        history.push("/");
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (    
    <div className="App">


      <Router>
      <>
        {!user ? (
          <div className="app__login">
              <Header/>
              <Login/>
          </div>
        ) : (
            <Switch>
              <Route path="/checkout">
                <Header/>
                <Checkout />
              </Route>
              <Route path="/login">
                  <Header/>
                  <Login/>
              </Route>
              <Route path="/">
                  <Header/>
                  <Main/>
                  <Popular/>
                  <Newarrivals/>
              </Route>
            </Switch>
            )
          }
      </>
      </Router>
    </div>
  );
}

export default App;
