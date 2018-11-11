import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <h1>Expense List</h1>
    <div className="list-header"> 
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ?
        (<p>No Expenses</p>) :
        props.expenses.map((expense) => 
          <ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filter)
});

export default connect(mapStateToProps)(ExpenseList);