import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Foods from './components/Foods';
import Cooks from './components/Cooks';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
    <Switch>
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/foods' component={Foods} />
      <Route exact path = '/cooks' component={Cooks} />

    </Switch>
    </>

  );
}

export default App;
