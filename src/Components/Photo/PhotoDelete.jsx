import { PHOTO_DELETE } from '../../api/auth';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm(
      'Tem certeza que deseja deletar? Essa ação não poderá ser desfeita.',
    );

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);

      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className='rounded-md border border-transparent bg-neutral-300 px-2.5 py-1 text-sm leading-none text-black transition hover:border-neutral-800 hover:bg-white hover:outline-none hover:ring hover:ring-neutral-200 focus:border-neutral-800 focus:bg-white focus:outline-none focus:ring focus:ring-neutral-200 disabled:cursor-wait disabled:opacity-50'
    >
      {loading ? 'Deletando...' : 'Deletar'}
    </button>
  );
};

export default PhotoDelete;
