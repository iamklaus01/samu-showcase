/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer id="footer" className="footer ">
			<div className="footer-top">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center md:justify-around gap-8 xl:gap-16">
						<div className="max-w-xl">
							<div className="single-footer">
								<h2>SAMU BENIN</h2>
								<p className="leading-8 text-justify">Le SAMU Benin est une organisation de santé publique dédiée à fournir des services médicaux d'urgence à la population béninoise. Notre mission est d'assurer une réponse rapide et efficace à toutes les situations d'urgence médicale, 24h/24 et 7j/7.</p>
								<ul className="social">
                                    <li><a href="#"><Icon icon={"bxl:facebook-square"} className="text-center" /></a></li>
                                    <li><a href="#"><Icon icon={"ri:twitter-x-fill"} className="text-center" /></a></li>
                                    <li><a href="#"><Icon icon={"mdi:linkedin"} className="text-center" /></a></li>
								</ul>
							</div>
						</div>
						<div className="max-w-xl">
							<div className="single-footer f-link">
								<h2>Appels d'urgence</h2>
								<div className="flex flex-wrap">
									<div className="w-full">
										<ul className="space-y-4">
											<li className="flex flex-row justify-start gap-2 items-center"><Icon icon="fluent-mdl2:caret-solid" className="text-white md:text-lg" /><a href="#">7j / 7 & 24h / 24</a></li>
											<li className="flex flex-row justify-start gap-2 items-center"><Icon icon="fluent-mdl2:caret-solid" className="text-white md:text-lg" /><a href="#">+229 68 40 00 00</a></li>
											<li className="flex flex-row justify-start gap-2 items-center"><Icon icon="fluent-mdl2:caret-solid" className="text-white md:text-lg" /><a href="#">+229 68 30 00 00</a></li>
											<li className="flex flex-row justify-start gap-2 items-center"><Icon icon="fluent-mdl2:caret-solid" className="text-white md:text-lg" /><a href="#">+229 90 90 30 02</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="flex flex-wrap">
						<div className="col-lg-12 col-md-12 w-full">
							<div className="copyright-content">
								<p>© Copyright 2024  |  SAMU - BENIN </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )

}
export default Footer