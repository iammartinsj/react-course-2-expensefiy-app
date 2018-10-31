import React from 'react';
import { shallow } from 'enzyme'; 
import { ExpensesSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import expensesCount from '../../selectors/expenses-count';
import expensesTotal from '../../selectors/expenses-total';

test('should render one Expense Summary Correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={500}  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple Expenses Summary Correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={1500} />);
  expect(wrapper).toMatchSnapshot();
});