import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [is_visible, setIsVisible] = useState(false);

    const toggle_visibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggle_visibility);
        return () => {
            window.removeEventListener('scroll', toggle_visibility);
        };
    }, []);

    // Fonction pour retourner en haut
    const scroll_to_top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {is_visible && (
                <button
                    onClick={scroll_to_top}
                    className="fixed bottom-6 right-6 bg-primary hover:-translate-y-0.5 duration-300 ease-in-out text-white px-3 py-3.5 rounded shadow-lg z-10"
                >
                   <Icon icon="ic:baseline-arrow-upward" className="text-xl" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
