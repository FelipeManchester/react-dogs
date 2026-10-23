const MobileButton = ({ open, setOpen, className }) => {
  return (
    <button
      aria-label='Menu'
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className={className}
    ></button>
  );
};

export default MobileButton;
