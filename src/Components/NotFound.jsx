import Head from '../Helper/Head';

const NotFound = () => {
  return (
    <section className='container mt-16'>
      <Head title='Página não encontrada' />
      <h1 className='title'>Erro: 404</h1>
      <p>Página não encontrada.</p>
    </section>
  );
};

export default NotFound;
