import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

test("should expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 350000,
    note: 'This one is beter',
    createdAt: 12312233
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore({});
  const defaultData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...defaultData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData);
    done();
  });
});

// test("should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {    
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });