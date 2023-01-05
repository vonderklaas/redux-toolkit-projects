import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <>
      <br />
      <h3>Post</h3>
      <br />
      <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className='postCredit'>
          <Link to={`/post/edit/${post.id}`}>
            <span className='link'>Edit Post</span>
          </Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </>
  );
};

export default SinglePostPage;
