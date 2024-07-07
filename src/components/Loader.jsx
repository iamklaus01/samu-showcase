import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const handleLoad = () => {
      document.querySelector('.preloader').classList.add('preloader-deactivate');
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Loader;
