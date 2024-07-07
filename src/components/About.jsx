/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
import VideoPlayer from './VideoPlayer';
import director_speech from '../assets/videos/speech.mp4';
import section_img from '../assets/images/section-img.png';
import video_poster from '../assets/images/video_poster.jpg';


const About = () => {
    return (
        <section id="about" className="why-choose section" >
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-center">
					<div className="lg:w-full">
						<div className="section-title">
							<h2>A propos du SAMU</h2>
							<img src={section_img} alt="#" />
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-center">
					<div className="lg:w-7/12 w-full px-4">
						<div className="choose-left">
							<h3>Qui sommes-nous ?</h3>
							<p className="text-base xl:text-lg">Le SAMU Benin est une organisation de santé publique dédiée à fournir des services médicaux d'urgence à la population béninoise. Notre mission est d'assurer une réponse rapide et efficace à toutes les situations d'urgence médicale, 24h/24 et 7j/7.</p>
						<p className="text-base xl:text-lg">Avec une équipe de professionnels qualifiés et des équipements de pointe, nous nous engageons à offrir des soins de haute qualité, adaptés aux besoins spécifiques de chaque patient. Notre objectif est de garantir la sécurité et le bien-être de tous ceux que nous servons.</p>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-6/12">
									<ul className="list">
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Équipe médicale disponible 24 / 7.</li>
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Flotte d'ambulances équipées.</li>
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Interventions rapides et efficaces.</li>
									</ul>
								</div>
								<div className="w-full lg:w-6/12">
									<ul className="list">
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Soins de réanimation.</li>
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Transport médicalisé sécurisé.</li>
										<li className='text-sm xl:text-base flex justify-start gap-2 items-center'><Icon icon="fluent-mdl2:caret-solid" className="about-icon" />Suivi post-intervention.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-5/12 w-full">
						<div className="choose-right">
							<div className="video-image">
								<VideoPlayer src={director_speech} poster={video_poster} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default About