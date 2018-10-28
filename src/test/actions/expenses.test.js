import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("should setup remove expense action object", () => {
  const action = removeExpense({id: '1234dds3'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234dds3'
  })
});

test("note new value", () => {
  const action = editExpense("ID12345", {note: "This is note new value"});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'ID12345',
    updates: {
      note:"This is note new value"
    }
  });
});

test("should setup add expense action object provided values", () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {    
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});