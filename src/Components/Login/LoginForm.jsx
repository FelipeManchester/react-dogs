import Error from '../../Helper/Error';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

import { useContext } from 'react';
import { UserContext } from '../../context/context';
import { loginPasswordSchema, loginUsernameSchema } from '../../schemas';

const LoginForm = () => {
  const username = useForm(loginUsernameSchema);
  const password = useForm(loginPasswordSchema);

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const isUsernameValid = username.validate();
    const isPasswordValid = password.validate();
    if (!isUsernameValid || !isPasswordValid) return;

    userLogin(username.value, password.value);
  }

  return (
    <section className='animate-anime-left'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit} className='mb-8'>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button
          text={loading ? 'Carregando...' : 'Entrar'}
          disabled={loading}
        />
        <Error error={error} />
      </form>
      <Link
        to={'/login/recuperar'}
        className="inline-block px-0 py-2 leading-none text-neutral-600 after:block after:h-[2px] after:w-full after:bg-neutral-600 after:content-['']"
      >
        Esqueci minha senha
      </Link>
      <div className='mt-16'>
        <h2 className="font-secondary text-4xl after:block after:h-2 after:w-12 after:rounded-sm after:bg-neutral-200 after:content-['']">
          Cadastre-se
        </h2>
        <p className='mb-8 mt-8'>
          Faça seu cadastro e comece a postar seus{' '}
          <span className='underline decoration-brand decoration-wavy decoration-2 underline-offset-4'>
            dogs :3
          </span>
        </p>
        <Link to='/login/criar' className='btn inline-block'>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
