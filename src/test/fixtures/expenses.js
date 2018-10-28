import moment from 'moment';

//Array Object that will be test
export default [
  { 
    id:'1',
    description: 'Water',
    note: '',
    amount: 15000000,
    createdAt: moment(0).valueOf()
  },
  { 
    id:'2',
    description: 'Rent',
    note: '',
    amount: 2500000,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id:'3',
    description: 'Internet',
    note: '',
    amount: 400000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }
]