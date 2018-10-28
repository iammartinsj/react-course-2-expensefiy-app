import ExpenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

test('should set default state', () => {
  const state = ExpenseReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: '2'
  }
  const state = ExpenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = ExpenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: uuid(),
    description: 'Test Description',
    note: 'Test Note',
    amount: 1,
    createdAt: 1000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = ExpenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const amount = 500000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      amount
    }
  }
  const state = ExpenseReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const amount = 800000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = ExpenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});