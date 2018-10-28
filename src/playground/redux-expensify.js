import { createStore, combineReducers } from 'redux'; //import redux module
import uuid from 'uuid'; //import uuid module

//Add-Expense function
//Destructure Object Parameter
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
}) => ({
  type:'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Remove-Expense function
const removeExpense = ({id}) => ({
  type:'REMOVE_EXPENSE',
  id
});

//Edit-Expense function
const editExpense = (id, updates) => {
  return {
    type:'EDIT_EXPENSE',
    id,
    updates
  }
};

//Expense-Reducer Default State
const expensesReducerDefaultState = [];

//Expense-Reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {  
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id == action.id){
          ({
            ...expense,
            ...action.updates
          })
        }
        return expense
      });
    default:
      return state;
  }
}

//Set Filter-Text function
const setFilterText = (text = '') => ({
  type:'SET_FILTER_TEXT',
  text
});

//Sort-by Amount function
const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
});

//Sort-by Date function
const sortByDate = () => ({
  type:'SORT_BY_DATE'
});

//Set Start-Date function
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
});

//Set End-Date function
const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
});

//Filter Reducer Default State
const filterReducerDefaultSate = {
  text:'',
  sortBy:'date',
  startDate:undefined,
  endDate:undefined
};

//Filter Reducer
const filterReducer = (state = filterReducerDefaultSate, action) => {
  switch(action.type){
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text:action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy:'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

//Redux Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

//Display expense base on filters parameters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a , b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}; 

//Print Redux Store State every time it changes
store.subscribe(() => {
  const state = store.getState();
  console.log('State',state);
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  // console.log('visible',visibleExpenses);
});

//Execute new State Change to Store and set each of it in a variable
const expenseOne = store.dispatch(addExpense({ description:'rent', amount:6000, createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({ description:'internet', amount:20000, createdAt:2000}));

//Remove and Edit Expenses
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { description:'aaaa', amount:20000, createdAt:2000 }));

//Set a filter for expenses
// store.dispatch(setFilterText('e'));
// store.dispatch(setFilterText());

//Set filter to sort it using Amount Field
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//Set a Start-Date and End-Date filter
// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1500));

