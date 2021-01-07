// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route path='/'>
     <Home/>
           
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
