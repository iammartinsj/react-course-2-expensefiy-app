import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.length === 0 ?
      (<p>No Expenses</p>) :
      props.expenses.map((expense) => 
        <ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />
      )
    }
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filter)
});

export default connect(mapStateToProps)(ExpenseList);