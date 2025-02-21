import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const handleLoad = () => {
      document.querySelector('.preloader').classList.add('preloader-deactivate');
    };

    // To fix
    // document.addEventListener('DOMContentLoaded', handleLoad);
    // window.addEventListener('load', handleLoad);

    setTimeout(() => {
      handleLoad();
    }, 2000);

    return () => {
      // document.removeEventListener('DOMContentLoaded', handleLoad);
      // window.removeEventListener('load', handleLoad);
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
