import React, { useEffect } from 'react';
import './App.css';
import './Header.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Element, Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51GxQNmJkcyuQwfCB0DE4UcI2htmBPNrDzDWwOaeQ3BNbredGDn8Kv2GFmtWKhlzGFyffLCnExlMzmqkCIFslhJZv00ssVmBx9E'
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
