import { createStore} from 'redux'; //import redux module

const store = createStore((state = {count:0}, action)=>{
  //Reducer
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count:action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default :
      return state;
  }
});

const incrementCount = ({incrementBy = 1} = {}) => ({
  type:'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({count}) => ({
  type:'SET',
  count
})

const unsubscriber = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:-101}));