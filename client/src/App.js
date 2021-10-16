import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-container custom-center">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
