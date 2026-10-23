import DogsFooter from '../assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className='bg-brand px-4 pb-8 pt-12 text-center text-brand-dark'>
      <DogsFooter className='mx-auto mb-4' />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
