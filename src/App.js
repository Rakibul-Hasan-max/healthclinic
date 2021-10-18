import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
