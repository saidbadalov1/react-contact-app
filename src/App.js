import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './components/update/update';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <Route exact path='/login' component={Login} />
        </div>
        <div>
          <Route exact path='/' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
