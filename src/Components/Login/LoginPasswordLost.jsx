import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head';
import { PASSWORD_LOST } from '../../api/auth';
import { loginUsernameSchema } from '../../schemas';

const LoginPasswordLost = () => {
  const login = useForm(loginUsernameSchema);
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!login.validate()) return;

    const { url, options } = PASSWORD_LOST({
      login: login.value,
      // the API emails a link to this url, adding ?key=...&login=...
      url: window.location.href.replace('recuperar', 'resetar'),
    });
    await request(url, options);
  }

  return (
    <section className='animate-anime-left'>
      <Head title='Perdeu a senha?' />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p className='text-green-700'>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='login' {...login} />
          <Button
            text={loading ? 'Enviando...' : 'Enviar email'}
            disabled={loading}
          />
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
