import { useState } from 'react';

import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api/auth';
import Error from '../../Helper/Error';

// on hover/focus: yellow dog + the sound lines (<g>) blink
const sendButton =
  '[&:focus_svg_path]:fill-amber-200 [&:focus_svg_path]:stroke-brand [&:hover_svg_path]:fill-amber-200 [&:hover_svg_path]:stroke-brand [&:focus_svg_g]:animate-latir [&:hover_svg_g]:animate-latir';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');

  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    const { url, options } = COMMENT_POST(id, { comment }, token);

    const { response, json } = await request(url, options, token);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-8 grid grid-cols-[1fr_auto] items-center gap-2'
    >
      <textarea
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className='block h-14 w-full resize-none overflow-auto rounded-md border-2 border-neutral-200 bg-neutral-100/80 p-2 text-base hover:border-brand hover:bg-white focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_#fea] focus:outline-none'
      />
      <button className={sendButton}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
