import MainPage from './Main_Page/MainPage'
import {Route, Router,Switch} from 'react-router-dom'
import {ScrollRestoration} from 'react'
import './App.css';
import Dashboard from './Dashboard/Dashboard'
function App() {
  return (
    <div className="App">
     <Dashboard/>
    </div>
  );
}

export default App;
