/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";

const Features = ({show}) => {

    const handle_scheduled_intervention_click = () => {
      show(true);
    }

    const go_to_section = (section_id) => {
      const section = document.getElementById(section_id);
      
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
    }


    return (
      <section className="feature">
        <div className="container mx-auto">
          <div className="hidden xl:block feature-inner w-full">
            <div className="flex flex-wrap gap-8 xl:gap-0 justify-center items-start w-full">
              <div className="w-full md:w-1/2 lg:w-4/12">
                <div className="single-feature max-w-sm mx-auto">
                  <div className="inner">
                    <div className="icon">
                      <Icon icon={"bxs:ambulance"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Service permanent</span>
                      <h4>Urgences médicales</h4>
                      <p>
                        En cas d'urgence médicale, contactez l'un de nos numéros
                        d'urgence 24/7, pour une assistance immédiate.
                      </p>
                      <ul className="time-sidual">
                        <li>+229 90 90 30 02</li>
                        <li>+229 68 40 00 00</li>
                        <li>+229 68 30 00 00</li>
                      </ul>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={() => go_to_section('process')} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">En savoir plus</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-4/12">
                <div className="single-feature max-w-sm mx-auto">
                  <div className="inner">
                    <div className="icon">
                      <Icon icon={"ic:round-event"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Nouveau service</span>
                      <h4>Intervention programmée</h4>
                      <p>
                        Planifiez à l'avance un transport médical pour vous ou vos proches.
                      </p>
                      <p>
                        Le SAMU Bénin vous permet de réserver des interventions programmées à une date et une heure précises, garantissant une prise en charge adaptée et ponctuelle. 
                      </p>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={handle_scheduled_intervention_click} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">Réserver</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full md:w-1/2 lg:w-4/12">
                <div className="single-feature last max-w-sm mx-auto">
                  <div className="inner">
                    <div className="icon">
                        <Icon icon={"ic:round-local-hospital"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Autre service</span>
                      <h4>Couverture médicale</h4>
                      <p>
                        Profitez de notre assistance médicale spécialisée lors
                        d'événements ou autres.
                      </p>
                      <p>
                        Le SAMU Benin assure une couverture médicale fiable et
                        réactive, garantissant des soins de qualité pour
                        répondre à vos besoins en cas d'urgence.
                      </p>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={() => go_to_section('medical-cover')} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">Réserver</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="xl:hidden w-full">
            <div className="flex flex-wrap gap-8 xl:gap-0 justify-center items-stretch w-full">
              <div className="w-full md:w-1/2 lg:w-4/12 mx-auto">
                <div className="single-feature mx-auto">
                  <div className="inner">
                    <div className="icon">
                      <Icon icon={"bxs:ambulance"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Service permanent</span>
                      <h4>Urgences médicales</h4>
                      <p>
                        En cas d'urgence médicale, contactez l'un de nos numéros
                        d'urgence 24/7, pour une assistance immédiate.
                      </p>
                      <ul className="time-sidual">
                        <li>+229 90 90 30 02</li>
                        <li>+229 68 40 00 00</li>
                        <li>+229 68 30 00 00</li>
                      </ul>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={() => go_to_section('process')} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">En savoir plus</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-4/12 mx-auto">
                <div className="single-feature mx-auto">
                  <div className="inner">
                    <div className="icon">
                      <Icon icon={"ic:round-event"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Nouveau service</span>
                      <h4>Intervention programmée</h4>
                      <p>
                        Planifiez à l'avance un transport médical pour vous ou vos proches.
                      </p>
                      <p>
                        Le SAMU Bénin vous permet de réserver des interventions programmées à une date et une heure précises, garantissant une prise en charge adaptée et ponctuelle. 
                      </p>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={handle_scheduled_intervention_click} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">Réserver</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full md:w-1/2 lg:w-4/12 mx-auto">
                <div className="single-feature last mx-auto">
                  <div className="inner">
                    <div className="icon">
                        <Icon icon={"ic:round-local-hospital"} className="feature-icon"/>
                    </div>
                    <div className="single-content">
                      <span>Autre service</span>
                      <h4>Couverture médicale</h4>
                      <p>
                        Profitez de notre assistance médicale spécialisée lors
                        d'événements ou autres.
                      </p>
                      <p>
                        Le SAMU Benin assure une couverture médicale fiable et
                        réactive, garantissant des soins de qualité pour
                        répondre à vos besoins en cas d'urgence.
                      </p>
                    </div>
                    <div className="flex mt-6 justify-center items-center">
                      <button onClick={() => go_to_section('medical-cover')} className="mx-auto bg-white text-black text-xs md:text-sm rounded px-2 py-1.5 hover:shadow">Réserver</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Features