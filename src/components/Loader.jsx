import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    console.log('here');

    const handleLoad = () => {
      console.log('load');
      document.querySelector('.preloader').classList.add('preloader-deactivate');
      console.log(document.querySelector('.preloader').classList);
    };

    document.addEventListener('DOMContentLoaded', handleLoad);
    // window.addEventListener('load', handleLoad);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
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
