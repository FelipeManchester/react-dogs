import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api/auth';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

const TOTAL_PER_PAGE = 6;

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page,
        total: TOTAL_PER_PAGE,
        user,
      });
      const { response, json } = await request(url, options);

      // a short page means the API has no more photos
      if (response?.ok && json.length < TOTAL_PER_PAGE) setInfinite(false);
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading)
    return (
      <div className='relative h-40'>
        <Loading />
      </div>
    );
  if (data)
    return (
      <ul className='mb-4 grid grid-cols-2 justify-center gap-4 sm:grid-cols-3'>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
