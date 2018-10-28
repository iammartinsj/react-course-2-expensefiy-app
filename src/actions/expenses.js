import uuid from 'uuid';

//Add-Expense function
//Destructure Object Parameter
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
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
export const removeExpense = ({id}) => ({
  type:'REMOVE_EXPENSE',
  id
});

//Edit-Expense function
export const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});
