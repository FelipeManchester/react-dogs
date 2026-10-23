import { useState } from 'react';

const Image = ({ alt, className = '', ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`grid ${className}`}>
      {!loaded && (
        <div className='col-start-1 row-start-1 aspect-square w-full animate-skeleton bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]' />
      )}
      <img
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`col-start-1 row-start-1 block w-full transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};

export default Image;
