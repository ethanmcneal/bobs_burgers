import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Foods from './components/Foods';
import Cooks from './components/Cooks';
import Homepage from './components/Homepage';
import Food from './components/Food';

function App() {
  return (
    <>
    <Switch>
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/foods/:id' component={Food} />
      <Route exact path = '/cooks' component={Cooks} />

    </Switch>
    </>

  );
}

export default App;
