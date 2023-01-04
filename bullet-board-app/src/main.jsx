import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// We want to load users, right when the app starts
import { fetchUsers } from './features/users/usersSlice';
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
