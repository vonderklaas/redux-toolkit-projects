import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      {/* Parent of everyone */}
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>
        <Route path='user'>
          <Route index element={<UsersList />} />
        </Route>
        {/* Catch all */}
        <Route path='*' element={<Navigate to='/' replace />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
