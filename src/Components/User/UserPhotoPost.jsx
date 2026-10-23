import Error from '../../Helper/Error';
import { useEffect, useState } from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api/auth';

import { dogAgeSchema, dogNameSchema, dogWeightSchema } from '../../schemas';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm(dogNameSchema);
  const peso = useForm(dogWeightSchema);
  const idade = useForm(dogAgeSchema);

  const [img, setImg] = useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className='mb-8 grid animate-anime-left gap-8 md:grid-cols-2'>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='text' name='peso' {...peso} />
        <Input label='Idade' type='text' name='idade' {...idade} />
        <input
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
          className='mb-4'
        />
        <Button text={loading ? 'Enviando...' : 'Enviar'} disabled={loading} />
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className='aspect-square w-full rounded-2xl bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
