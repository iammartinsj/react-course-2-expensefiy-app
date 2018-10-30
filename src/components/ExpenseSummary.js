import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesCount from '../selectors/expenses-count';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <div>
        Viewing {expensesCount(this.props.expenses)} totalling {numeral(expensesTotal(this.props.expenses)).format('$0,0.00')}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filter),
});

export default connect(mapStateToProps)(ExpensesSummary);