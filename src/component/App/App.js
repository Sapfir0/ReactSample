import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from '../../pages/Login';
import Register from '../../pages/Register';
import AllUsersTable from "../../pages/AllUsers";


function Header() {
    return(<header className="App-header">
    <nav className="navbar">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/login'} className="nav-link"> Login </Link></li>
                <li><Link to={'/register'} className="nav-link">Register</Link></li>
                <li><Link to={'/allUsers'} className="nav-link">All users</Link></li>
            </ul>
        </nav>
    </header>)
}

function Main() {
    return (<Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/allUsers' component={AllUsersTable} />
    </Switch>)
}

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Main/>
            </Router>
        </div>
    );
}

export default App;
