import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './components/LoginPage';
import { firebase } from './firebase/firebase';
// import './playground/promises';

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);
let isRendered = false;
let renderApp = () => {
  if(!isRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    isRendered = true;  
  }
}

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(()=> {
      renderApp();
      if (history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
