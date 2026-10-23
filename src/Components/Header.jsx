import { Link } from 'react-router-dom';
import Dog from '../assets/dogs.svg?react';
import { useContext } from 'react';
import { UserContext } from '../context/context';
const Header = () => {
  const { data, login } = useContext(UserContext);

  return (
    <header className='fixed top-0 z-50 w-full bg-white shadow-sm'>
      <div className='container'>
        <nav className='flex h-16 items-center justify-between'>
          <Link to='/' aria-label='Dogs - Home' className='px-0 py-2'>
            <Dog />
          </Link>
          {login === null ? null : data ? (
            <div className='flex items-center gap-6'>
              <Link
                to='/conta'
                className="flex items-center capitalize text-neutral-800 after:ml-2 after:inline-block after:h-[17px] after:w-[14px] after:bg-usuario after:bg-center after:bg-no-repeat after:content-[''] hover:font-bold hover:text-neutral-700"
              >
                {data.username}
              </Link>
            </div>
          ) : (
            <Link
              to='/login'
              className="flex items-center text-neutral-800 after:ml-2 after:inline-block after:h-[17px] after:w-[14px] after:bg-usuario after:bg-center after:bg-no-repeat after:content-['']"
            >
              Login / Criar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
