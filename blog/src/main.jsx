import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// We want to load users, right when the app starts
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
