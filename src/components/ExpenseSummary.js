import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesCount from '../selectors/expenses-count';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div>
      <h2>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
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