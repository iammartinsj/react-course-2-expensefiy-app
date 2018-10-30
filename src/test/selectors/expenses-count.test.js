import selectExpensesCount from '../../selectors/expenses-count';
import expenses from '../fixtures/expenses';

test('should return the count of event if empty', () => {
  const count = selectExpensesCount([]);
  expect(count).toBe(0);
});

test('should return the count of expenses', () => {
  const count = selectExpensesCount(expenses);
  expect(count).toBe(3);
});