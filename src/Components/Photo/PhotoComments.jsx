import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/context';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentSection = useRef(null);

  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className='max-h-60 overflow-y-auto break-all'>
        {comments.map((comment) => (
          <li key={comment.comment_ID} className='mb-2 leading-5'>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
