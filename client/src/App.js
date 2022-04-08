import './App.css';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom'

import Navigation from './components/navbar';
import Users from './components/users';
import Blog from './components/blogform';
import BlogList from './components/bloglist';

function App() {
  return (
    <Routes>
      <div className="App">
        Hello from Techtonica
        <br/>
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/bloglist">
              <BlogList/>
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </Routes>
  );
}

export default App;
