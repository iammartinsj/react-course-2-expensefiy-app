import React from 'react';
import { shallow } from 'enzyme';
import ExpenseModal from '../component/../components/ExpenseModal';

let onRemove, forRemovalExpense, wrapper;

beforeEach(() => {
  forRemovalExpense = "Expense 1";
  onRemove = jest.fn();
  wrapper = shallow(
    <ExpenseModal
      forRemovalExpense={forRemovalExpense}
      onRemove={onRemove}
    />
  );
});

test("should render expense modal correctly", () => {
  expect(wrapper).toMatchSnapshot();
});