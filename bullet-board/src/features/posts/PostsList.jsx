import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts, // AsyncThunk Function
} from './postsSlice';
import { useEffect } from 'react';

import Post from './Posts';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const orderPosts = posts
    .slice()
    .sort((a, b) => b.date.toString().localeCompare(a.date));

  return (
    <section>
      <h3>Posts</h3>
      <br />
      {postsStatus === 'loading' && <p>Loading...</p>}
      {postsStatus === 'succeeded' && (
        <>
          {orderPosts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </>
      )}
      {postsStatus === 'error' && (
        <>
          <p>Something went wrong!</p>
          <p>{postsError.error}</p>
        </>
      )}
    </section>
  );
};

export default PostsList;
