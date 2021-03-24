import './App.scss';


import CommentInput from './comps/CommentInput';
import CommentPost from './comps/CommentPost';
import LoginSignup from './comps/LoginSignup';
import PostNav from './comps/PostNav';


import Post from './pages/Post';
import Main from './pages/Main';

import Welcome from './pages/Welcome';



function App() {
  return (
    <div className="App">
      <Main />
      <Welcome />
    </div>
  );
}

export default App;