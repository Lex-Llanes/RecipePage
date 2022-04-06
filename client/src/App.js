import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Users from './components/users';
import Blog from './components/blogform';


function App() {
  return (
    <div className="App">
      Hello from Techtonica
      <br/>
      <Users/>
      <Blog/>
    </div>
  );
}

export default App;
