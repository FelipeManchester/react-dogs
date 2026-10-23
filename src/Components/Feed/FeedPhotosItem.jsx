const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li
      className='group grid cursor-pointer overflow-hidden rounded-md sm:[&:nth-child(2)]:col-start-2 sm:[&:nth-child(2)]:col-end-4 sm:[&:nth-child(2)]:row-span-2'
      onClick={handleClick}
    >
      <img
        src={photo.src}
        alt={photo.title}
        className='col-start-1 row-start-1'
      />
      <span className="before:bg-visualizacao col-start-1 row-start-1 hidden items-center justify-center bg-black/30 text-base text-white before:mr-1 before:inline-block before:h-2.5 before:w-4 before:bg-no-repeat before:content-[''] group-hover:flex">
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
