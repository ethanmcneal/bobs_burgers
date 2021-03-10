import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Foods from './components/Foods';
import Cooks from './components/Cooks';
import Homepage from './components/Homepage';
import Food from './components/Food';
import Navbar from './components/Navbar';
import NewFoodForm from './components/NewFoodForm';
import editFoodForm from './components/EditFoodForm';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = '/' component={Homepage} />
      <Route exact path = '/foods/new' component={NewFoodForm} />
      <Route exact path = '/foods/:id' component={Food} />
      <Route exact path = '/cooks' component={Cooks} />
      <Route exact path = '/foods/:id/edit' component={editFoodForm} />
      

    </Switch>
    </>

  );
}

export default App;
