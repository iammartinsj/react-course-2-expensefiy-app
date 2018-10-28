//Set Filter-Text function
export const setFilterText = (text = '') => ({
  type:'SET_FILTER_TEXT',
  text
});

//Sort-by Amount function
export const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
});

//Sort-by Date function
export const sortByDate = () => ({
  type:'SORT_BY_DATE'
});

//Set Start-Date function
export const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
});

//Set End-Date function
export const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
});
