import { useNavigate, useSearchParams } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head';
import { PASSWORD_RESET } from '../../api/auth';
import { passwordSchema } from '../../schemas';

const LoginPasswordReset = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get('key');
  const login = searchParams.get('login');

  const password = useForm(passwordSchema);
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!password.validate()) return;

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response?.ok) navigate('/login');
  }

  return (
    <section className='animate-anime-left'>
      <Head title='Resete a senha' />
      <h1 className='title'>Resete a senha</h1>
      {key && login ? (
        <form onSubmit={handleSubmit}>
          <Input
            label='Nova senha'
            type='password'
            name='password'
            hint='Mínimo de 8 caracteres, com pelo menos uma letra e um número.'
            {...password}
          />
          <Button
            text={loading ? 'Resetando...' : 'Resetar'}
            disabled={loading}
          />
        </form>
      ) : (
        <p>Link inválido. Peça um novo email em &quot;Perdeu a senha?&quot;.</p>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
