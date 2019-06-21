import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Smurfs from '../components/Smurfs';
import AddSmurfForm from '../components/AddSmurfForm';

function App () {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Smurf Village</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/addsmurf">Add Form</Link>
            </li>
          </ul>
          <Route exact path="/" component={Smurfs} />
          <Route path="/addsmurf" component={AddSmurfForm} />
        </div>
      </Router>
    );
}

export default App;
