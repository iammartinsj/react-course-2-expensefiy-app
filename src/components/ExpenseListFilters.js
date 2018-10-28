import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  onTextChange = (e) => {
    this.props.setFilterText(e.target.value);
  }

  onSortByChange = (e) => {
    if(e.target.value === 'date') {
      this.props.sortByDate() 
    } else if(e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextChange} 
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}
        > 
          <option value="amount">Amount</option>
          <option value="date">Date</option> 
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters:state.filter
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)), 
  setFilterText: (text) => dispatch(setFilterText(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
