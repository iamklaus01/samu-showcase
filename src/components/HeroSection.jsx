import { Carousel } from 'primereact/carousel';
import slider_1 from '../assets/images/slider/slider-1.jpg';
import slider_2 from '../assets/images/slider/slider-2.jpg';
import slider_3 from '../assets/images/slider/slider-3.jpg';
import { useState } from 'react';

const HeroSection = () => {

    const [autoplay, setAutoplay] = useState(true);

    const handle_mouse_enter = () => {
        setAutoplay(false);
    };

    const handle_mouse_leave = () => {
        setAutoplay(true);
    };
    const contents = [
        {
            'title': "Service médical d'urgence 24 / 7",
            'description': "Le SAMU Bénin est dédié à votre bien-être à tout moment. Nous intervenons rapidement pour assurer des soins médicaux efficaces et professionnels.",
            'image': slider_1,
            'btn_label' : "Nous découvrir",
            'btn_link' : "#about"
        },
        {
            'title': "Équipes spécialisées, équipements de pointe",
            'description': "Nous mettons à votre disposition des équipes médicales professionnelles et des équipements modernes. Votre santé mérite le meilleur service.",
            'image': slider_2,
            'btn_label' : "En savoir plus",
            'btn_link' : "#services"
        },
        {
            'title': "Votre santé, notre priorité absolue",
            'description': "Au SAMU Bénin, nous plaçons votre santé au sommet de nos priorités. Notre équipe dévouée est là pour vous fournir des soins attentifs et réactifs à tout moment.",
            'image': slider_3,
            'btn_label' : "Nous contacter",
            'btn_link' : "#contact"
        }
    ]

    const hero_template = (content) => {
        return (
            <div className="single-slider" style={{ backgroundImage: `url(${content.image})` }}        >
                <div className="container">
                    <div className="flex pl-4 md:p-8 xl:pl-16">
                    <div className="w-full lg:w-7/12">
                        <div className="text">
                            <h1 className="text-2xl lg:text-4xl xl:text-5xl">{content.title}</h1>
                            <p className="md:text-lg xl:text-xl">
                                {content.description}
                            </p>
                            <div className="button">
                                <a href="#medical-cover" className="btn">Couverture médicale</a>
                                <a href={content.btn_link} className="btn primary">{content.btn_label}</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="slider">
            <div className="hero-slider" onMouseEnter={handle_mouse_enter} onMouseLeave={handle_mouse_leave}>
                <Carousel 
                    circular={true}
                    value={contents} 
                    showIndicators={false} 
                    showNavigators={false} 
                    autoplayInterval={autoplay ? 3000 : 0} 
                    numVisible={1} 
                    numScroll={1} 
                    itemTemplate={hero_template} 
                />
            </div>
        </section>
    );
};

export default HeroSection;
