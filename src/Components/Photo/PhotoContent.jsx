import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../context/context';
import PhotoDelete from './PhotoDelete';

// vertical bar before each attribute (peso, idade), in the text color
const attributes =
  "*:before:relative *:before:top-0.5 *:before:mr-2 *:before:mt-1 *:before:inline-block *:before:h-5 *:before:w-0.5 *:before:bg-current *:before:content-['']";

const PhotoContent = ({ data, closing }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div
      className={`${closing ? 'animate-scaleDown' : 'animate-scaleUp'} mx-auto grid max-h-[calc(100vh-4rem)] scale-[0.8] grid-cols-[minmax(20rem,40rem)] grid-rows-[auto_1fr_auto] overflow-y-auto rounded-md bg-white opacity-0 lg:h-[36rem] lg:max-h-none lg:grid-cols-[36rem_20rem] lg:overflow-hidden`}
    >
      <div className='lg:row-span-3'>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className='pl-4 pr-8 pt-8'>
        <div>
          <p className='mb-4 flex items-center justify-between opacity-50'>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`} className='hover:underline'>
                @{photo.author}
              </Link>
            )}

            <span className="before:mr-2 before:inline-block before:h-2.5 before:w-4 before:bg-visualizacao-black before:content-['']">
              {photo.acessos}
            </span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul
            className={`mb-8 mt-4 flex gap-8 text-lg font-bold ${attributes}`}
          >
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade == 1 ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} className='px-8' />
      </div>
    </div>
  );
};

export default PhotoContent;
