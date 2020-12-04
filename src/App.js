import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Link to="/">To Home</Link>
      <Link to="/dashboard">To Dashboard</Link>
      <Link to="/login">To Login</Link>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
