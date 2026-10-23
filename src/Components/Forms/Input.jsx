import Error from '../../Helper/Error';
const Input = ({ label, type, name, value, onChange, onBlur, error, hint }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block pb-2 text-base leading-4'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        aria-describedby={hint ? `${name}-hint` : undefined}
        className='block w-full rounded-md border-2 border-neutral-200 bg-neutral-100/80 p-3 text-base hover:border-brand hover:bg-white focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_#fea] focus:outline-none'
      />

      {hint && (
        <p id={`${name}-hint`} className='mt-1 text-sm text-neutral-600'>
          {hint}
        </p>
      )}
      <Error error={error} />
    </div>
  );
};

export default Input;
