import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesCount from '../selectors/expenses-count';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span>  {expenseWord} total in <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__Action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filter);

  return {
    expensesCount: selectExpensesCount(visibleExpenses),
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);