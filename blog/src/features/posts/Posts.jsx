import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const Post = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <div>
        <ReactionButtons post={post} />
      </div>
    </article>
  );
};

export default Post;
