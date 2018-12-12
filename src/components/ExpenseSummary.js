import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesHiddenCount, expensesCount, expensesTotal}) => {
  const hiddentExpenseWord = expensesHiddenCount <= 1 ? 'expense' : 'expenses';
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span>  {expenseWord} total in <span>{formattedExpensesTotal}</span>
        </h1>
        <p>{expensesHiddenCount} hidden {hiddentExpenseWord}</p>
        <div className="page-header__Action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filter);
  const hiddenExpense = state.expenses.length - visibleExpenses.length;
  return {
    expensesHiddenCount: hiddenExpense,
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);