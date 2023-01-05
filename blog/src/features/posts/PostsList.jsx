import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';

import Post from './Post';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  const orderPosts = posts
    .slice()
    .sort((a, b) => b.date.toString().localeCompare(a.date));

  return (
    <section>
      <h3>All Posts</h3>
      <p>There are {posts.length} posts</p>
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
