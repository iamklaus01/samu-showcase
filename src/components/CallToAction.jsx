/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const CallToAction = ({show}) => {

	const handle_scheduled_intervention_click = () => {
		show(true);
	}

    return (
        <section className="section call-action overlay">
			<div className="container mx-auto min-h-96 sm:min-h-72 lg:min-h-60">
				<div className="flex justify-center">
					<div className="w-full pb-12 relative">
						<div className="flex justify-center items-center flex-col gap-8 absolute text-white">
                            <h2 className="text-3xl font-semibold text-center mb-2">Avez-vous besoin d'une couverture médicale ?</h2>
                            <p className="text-center w-full md:w-3/4 text-lg">Le SAMU Benin vous propose une couverture médicale complète pour vous garantir une assistance rapide et efficace en cas d'urgence. Assurez-vous une tranquillité d'esprit en étant préparé à toute éventualité.</p>
							<div className="flex flex-wrap justify-center gap-4 xl:gap-8 items-center mt-4">
								<a href="#medical-cover" className="bg-primary text-white hover:-translate-y-0.5 hover:scale-105 py-2 px-4 xl:py-3 xl:px-6 rounded shadow">Couverture médicale</a>
								<a href="#" onClick={handle_scheduled_intervention_click} className="bg-white text-primary hover:-translate-y-0.5 hover:scale-105 py-2 px-4 xl:py-3 xl:px-6 rounded shadow">Intervention programmée</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default CallToAction;