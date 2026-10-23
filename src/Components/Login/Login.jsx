import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { useContext } from 'react';
import { UserContext } from '../../context/context';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === null) return null;
  if (login) return <Navigate to='/conta' replace />;
  return (
    <section className="grid min-h-dvh gap-8 before:hidden before:bg-login before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] md:grid-cols-2 md:before:block">
      <div className='max-w-[34rem] p-4 md:p-8'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='recuperar' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
