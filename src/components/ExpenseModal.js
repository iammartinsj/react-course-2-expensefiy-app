import React from 'react';
import Modal from 'react-modal';

const ExpenseModal = (props) => (
 <Modal
  isOpen={!!props.forRemovalExpense}
  contentLabel="ConfirmDeleteExpense"
  className="modal"
  onRequestClose={props.onClearForRemovalExpense}
 >
   <h2 className="modal__title">Remove Expense</h2>
   <div className="modal__body">
   {
     props.forRemovalExpense && 
     <div>
      <p>Are you sure you want to remove</p> 
      <b>{props.forRemovalExpense}?</b>
     </div>
   }
   </div> 
   <button className="button" onClick={props.onRemove}>Confirm</button>
 </Modal>
);

export default ExpenseModal;