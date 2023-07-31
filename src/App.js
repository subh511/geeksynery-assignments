import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import MovieList from './components/MovieList';
import CompanyInfo from './components/CompanyInfo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/company-info">Company Info</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/movies" component={MovieList} />
        <Route path="/company-info" component={CompanyInfo} />
      </div>
    </Router>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
