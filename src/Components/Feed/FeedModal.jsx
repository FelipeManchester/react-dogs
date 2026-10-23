import { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api/auth';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target !== event.currentTarget) return;

    if (data) setClosing(true);
    else setModalPhoto(null);
  }

  function handleAnimationEnd(event) {
    if (event.animationName === 'scaleDown') setModalPhoto(null);
  }
  return (
    <div
      onClick={handleOutsideClick}
      onAnimationEnd={handleAnimationEnd}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 py-8 pl-8 pr-[calc(2rem+15px)] md:pl-16 md:pr-[calc(4rem+15px)]'
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} closing={closing} />}
    </div>
  );
};

export default FeedModal;
