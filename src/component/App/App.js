import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from '../../pages/login';
import Register from '../../pages/register';
import AllUsersTable from "../../pages/allUsers";



function HeaderButtons() {
    return (<div>
        <button>Login</button>
        <button>Register</button>
    </div>);
}




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/login'} className="nav-link"> Login </Link></li>
                                <li><Link to={'/register'} className="nav-link">Register</Link></li>
                                <li><Link to={'/allUsers'} className="nav-link">All users</Link></li>

                            </ul>
                        </nav>
                        <hr />
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/allUsers' component={AllUsersTable} />

                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
