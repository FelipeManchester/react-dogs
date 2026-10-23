import Head from '../../Helper/Head';
import Error from '../../Helper/Error';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { emailSchema, passwordSchema, usernameSchema } from '../../schemas';
import { USER_POST } from '../../api/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/context';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const username = useForm(usernameSchema);
  const email = useForm(emailSchema);
  const password = useForm(passwordSchema);

  const { userLogin } = useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const isUsernameValid = username.validate();
    const isEmailValid = email.validate();
    const isPasswordValid = password.validate();
    if (!isUsernameValid || !isEmailValid || !isPasswordValid) return;

    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className='animate-anime-left'>
      <Head title='Crie sua conta' />
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input
          label='Senha'
          type='password'
          name='password'
          hint='Mínimo de 8 caracteres, com pelo menos uma letra e um número.'
          {...password}
        />
        <Button
          text={loading ? 'Cadastrando...' : 'Cadastrar'}
          disabled={loading}
        />
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
