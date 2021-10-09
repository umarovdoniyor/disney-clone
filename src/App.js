import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Details from './pages/details';
import Login from './pages/login';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
