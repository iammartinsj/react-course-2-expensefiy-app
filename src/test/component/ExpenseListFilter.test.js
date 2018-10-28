import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setFilterText, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setFilterText = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setFilterText = {setFilterText}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
      sortByDate = {sortByDate}
      sortByAmount = {sortByAmount}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters:altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').at(0).simulate('change',{
    target: {value}
  });
  expect(setFilterText).toHaveBeenLastCalledWith(value)
});

test('should handle sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters:altFilters
  })
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {value: altFilters.sortBy}
  })
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: altFilters.startDate, 
    endDate: altFilters.endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focued', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});