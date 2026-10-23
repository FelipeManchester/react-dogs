import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='container mt-16'>
      <Head title={user} />
      <h1 className='title'>{user}</h1>
      {/* key: a new profile starts a fresh feed, back at page 1 */}
      <Feed key={user} user={user} />
    </section>
  );
};

export default UserProfile;
