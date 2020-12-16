import './Header.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <h1>I am a checkpout page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
