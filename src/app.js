import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expenses';
import { setFilterText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
//Add Expenses
store.dispatch(addExpense({ description:'Gas bill', amount:1500, createdAt:0}));
store.dispatch(addExpense({ description:'Water bill', amount:1000, createdAt:5000}));
const expense3 = store.dispatch(addExpense({ description:'Internet bill', amount:2000, createdAt:0}));

//Set Filters
// store.dispatch(setFilterText('Bill'));

//Display Visible Expenses

// const state = store.getState();
// console.log('visible',getVisibleExpenses(state.expenses, state.filter));

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

//Render jsx to root application
ReactDOM.render(jsx, document.getElementById('app'));