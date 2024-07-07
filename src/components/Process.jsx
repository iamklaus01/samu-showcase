/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";

const Process = () => {
    return (
        <section id="process" className="ready-to-help section">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-between">
					<div className="lg:w-full">
						<div className="section-title text-center">
							<h2>Toujours prêt à intervenir</h2>
							<p>Le SAMU Benin est équipé et préparé pour répondre rapidement à toutes les situations d'urgence médicale. Nous intervenons pour assurer votre sécurité et votre bien-être.</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-between">
					<div className="lg:w-1/4 w-full">
						<div className="single-process">
							<div className="single-icon">
								<Icon icon={"mdi:phone"} className="process-icon"/>
							</div>
							<h3>Appels d'urgence & prise de contact</h3>
							<p>Contactez-nous 24/7 via nos numéros d'urgence.</p>
							<span>+229 68 40 00 00</span> <br />
							<span>+229 68 30 00 00</span>
						</div>
					</div>
					<div className="lg:w-1/4 w-full">
						<div className="single-process">
							<div className="single-icon">
								<Icon icon={"bxs:ambulance"} className="process-icon"/>
							</div>
							<h3>Analyse de la situation & Envoi de l'ambulance</h3>
							<p>Notre centre de réception et de régulation des appels analyse rapidement votre situation et envoie une équipe.</p>
						</div>
					</div>
					<div className="lg:w-1/4 w-full">
						<div className="single-process">
							<div className="single-icon">
                                <Icon icon="mingcute:first-aid-kit-fill" className="process-icon"/>
							</div>
							<h3>Premiers soins immédiats sur place</h3>
							<p>Les premiers soins sont administrés immédiatement sur place par notre équipe médicale.</p>
						</div>
					</div>
					<div className="lg:w-1/4 w-full">
						<div className="single-process last">
							<div className="single-icon">
                            <Icon icon={"ic:round-local-hospital"} className="process-icon"/>
							</div>
							<h3>Transport médicalisé fiable et sécurisé</h3>
							<p>Nous vous transportons de manière sécurisée vers l'hôpital le plus approprié pour des soins supplémentaires.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default Process