import Feed from './Feed/Feed';
import Head from '../Helper/Head';

const Home = () => {
  return (
    <section className='container mt-16'>
      <Head
        title='Fotos'
        description='Home do site Dogs, com o feed de fotos.'
      />
      <Feed />
    </section>
  );
};

export default Home;
