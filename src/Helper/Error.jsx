const Error = ({ error }) => {
  if (!error) return null;
  return <p className='mt-1 text-sm font-medium text-red-800/90'>{error}</p>;
};

export default Error;
