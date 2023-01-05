import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

const App = () => {
  return (
    <div className='App'>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default App;
