import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api/auth';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import Head from '../../Helper/Head';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading)
    return (
      <div className='relative h-80'>
        <Loading />
      </div>
    );
  if (!data) return null;

  return (
    <section className='container mb-8 mt-8'>
      <Head title={data.photo.title} />
      <PhotoContent single data={data} />
    </section>
  );
};

export default Photo;
