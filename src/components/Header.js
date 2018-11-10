import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
  <div>
    <h1>
       Expensify
    </h1>
    <ul>
      <li><NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
      <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      <li><button onClick={startLogout}>Logout</button></li>
    </ul>   
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);