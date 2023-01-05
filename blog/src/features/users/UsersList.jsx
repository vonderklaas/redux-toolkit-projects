import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  return (
    <section>
      <br />
      <h3>Authors</h3>
      <br />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UsersList;
