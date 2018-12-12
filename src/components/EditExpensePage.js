import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseModal from './ExpenseModal';

export class EditExpensePage extends React.Component {
  state = {
    forRemovalExpense: undefined
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onSetForRemoval = () => {
    this.setState(() => ({ 
      forRemovalExpense: this.props.expense.description 
    }));
  };

  onClearForRemovalExpense = () => {
    this.setState(() => ({
      forRemovalExpense: undefined
    }));
  }

  onRemove = () => {
    this.setState(() => ({
      forRemovalExpense: undefined
    }));
    this.props.startRemoveExpense({id:this.props.expense.id});
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <div className="page-header" >
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense={this.props.expense} 
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onSetForRemoval}>
            Remove Expense
          </button>
        </div>
        <ExpenseModal 
          forRemovalExpense={this.state.forRemovalExpense}
          onRemove={this.onRemove}
          onClearForRemovalExpense={this.onClearForRemovalExpense}
        />
      </div>
    )
  };
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);