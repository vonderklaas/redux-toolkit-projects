import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1>Redux Toolkit Blog</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='post'>Add Post</Link>
          </li>
          <li>
            <Link to='user'>Authors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
