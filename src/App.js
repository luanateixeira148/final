import './App.scss';

import Post from './pages/Post';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Comment from './pages/Comment';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'



function App() {
  return ( 
      <Router>
        <div className="App">
          <Switch>

          <Route exact path="/" component={Signup}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Welcome" component={Welcome}/>
          <Route exact path="/Main" component={Main}/>
          <Route exact path="/Post" component={Post}/>
          <Route exact path="/Comment" component={Comment}/>

          </Switch>
        </div>
      </Router>    
  );
}

export default App;