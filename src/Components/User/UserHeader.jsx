import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';
import Head from '../../Helper/Head';

const titles = {
  '/conta': 'Minha conta',
  '/conta/estatisticas': 'Estatísticas',
  '/conta/postar': 'Adicionar foto',
};

const UserHeader = () => {
  let location = useLocation();

  const title = titles[location.pathname];
  return (
    <header className='relative mb-8 mt-4 grid grid-cols-[1fr_auto] items-center'>
      <Head title={title} />
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
