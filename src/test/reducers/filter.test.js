import moment from 'moment';
import filterReducer from '../../reducers/filters';

//Should set default fitler
test('should setup default filter values', () => {
  const state = filterReducer(undefined, {});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

//Should set sortby equal to amount
test('should set sortBy amount', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  }
  const state = filterReducer(currentState, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

//Should set sortby equal to date
test('should set sortBy date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const state = filterReducer(currentState, {type: 'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});

//Should set text filter
test('should set text filter', () => {
  const text = 'test text'
  const state = filterReducer(undefined, {type: 'SET_FILTER_TEXT', text});
  expect(state.text).toBe(text);
});

//Should be set start-date filter
test('should set start date filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate,
  }
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

//Should be set a end-Date filter
test('should set end date filter', () => {
  const endDate = moment(0).valueOf();
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
