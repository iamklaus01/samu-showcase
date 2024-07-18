import { Icon } from "@iconify/react";
import section_img from '../assets/images/section-img.png';

const Services = () => {

    const services_data = [
        {
            title: "Transport médical",
            icon: "bxs:ambulance",
            description: "Notre flotte d'ambulances équipées assure un transport médicalisé rapide, sécurisé et fiable vers les établissements de santé appropriés, garantissant une prise en charge efficace en tout temps. "
        },
        {
            title: "Intervention programmée",
            icon: "medical-icon:hospital",
            description: "Réservation anticipée à une date et une heure précises, pour un transport néonatal, un transfert hospitalier ou tout autre besoin médical, assurant une prise en charge adaptée, ponctuelle et sécurisée."
        },
        {
            title: "Couverture médicale",
            icon: "line-md:medical-services-filled",
            description: "Des plans de couverture médicale garantissant un accès prioritaire aux services du SAMU BENIN en cas d'urgence, ainsi que des consultations médicales pour maintenir une bonne santé préventive."
        },
        {
            title: "Formation",
            icon: "fa:graduate-cap",
            description: "Programme de formation en premier secours pour le grand public et les professionnels de la santé, visant à enseigner les gestes de premiers secours essentiels pour intervenir efficacement en cas d'urgence."
        }
    ];
    return (
        <section id="services" className="services section service-section">
			<div className="container mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className="section-title">
							<h2>Nos Services</h2>
							<img src={section_img} alt="#" />
							<p>Le SAMU Benin offre une gamme complète de services médicaux pour assurer votre sécurité et votre santé. Nos interventions sont rapides et efficaces.</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-around gap-8 md:gap-12 xl:gap-16">
                    {services_data.map((data, index) => (
                        <div key={index} className="md:w-1/3 xl:w-1/4">
                            <div className="service-item">
                                <div className="service-icon mb-25">
                                    <Icon icon={data.icon} className="service-icon-icon" />
                                </div>
                                <div className="service-content">
                                    <h4>{data.title}</h4>
                                    <p className="text-justify xl:text-lg">{data.description}</p>
                                </div>
                                <div className="service-overlay img-bg"></div>
                            </div>
                        </div>
                        )
                    )}
				</div>
			</div>
		</section>
    )

}

export default Services