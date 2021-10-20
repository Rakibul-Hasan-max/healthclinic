import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import AuthProvider from './Component/Context/AuthProvider';
import Departments from './Component/Departments/Departments';
import Doctors from './Component/Doctors/Doctors';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
