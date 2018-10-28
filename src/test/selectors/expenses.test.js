//Imported Modules and Components
import moment from 'moment';
import selectExpense from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

//Should filter by text value
test("should filter by text value", () => {
  const filter = {
    text: 'n',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpense(expenses, filter);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

//Should Filter by Start Day
test("should be filter by start day", () => {
  const filter = {
    text:'',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpense(expenses, filter);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

//Should Filter by end Day 
test("should filter by end day", () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = selectExpense(expenses, filter)
  expect(result).toEqual([expenses[0], expenses[2]]);
});

//Should sort by date
test('should sort by date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpense(expenses, filter);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

//Should sort by amount
test('should sort by amount', () => {
  const filter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpense(expenses, filter);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});