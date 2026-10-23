import { useEffect, useState } from 'react';

const UseMediaScreen = (media) => {
  const [match, setMatch] = useState(() => window.matchMedia(media).matches);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);

      setMatch(matches);
    }

    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default UseMediaScreen;
