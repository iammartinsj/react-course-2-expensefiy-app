import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should return total if only one expense', () => {
  const total = selectExpensesTotal([expenses[1]]);
  expect(total).toBe(2500000);
});

test('should sum the total of expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(17900000);
});