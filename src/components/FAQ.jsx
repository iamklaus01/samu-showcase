/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionTab } from 'primereact/accordion';

const FAQ = () => {

    return (
        <>
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab className='text-lg xl:text-xl leading-8' header="Quelles sont les principales missions du SAMU Benin ?">
                    <p className="text-base lg:text-lg lg:leading-8 text-justify">
                        Le SAMU Benin est chargé de fournir une assistance médicale d'urgence, de répondre aux appels d'urgence, 
                        de dispenser des soins médicaux avancés sur le terrain, et de transporter les patients vers les structures 
                        de soins appropriées.
                    </p>
                </AccordionTab>
                <AccordionTab className='text-lg xl:text-xl leading-8' header="Comment contacter le SAMU Benin en cas d'urgence ?">
                    <p className="text-base lg:text-lg lg:leading-8 text-justify">
                        Pour contacter le SAMU Benin, composez le numéro d'urgence 151. Ce numéro est accessible 24h/24 et 7j/7 pour 
                        toute urgence médicale nécessitant une intervention immédiate.
                    </p>
                </AccordionTab>
                <AccordionTab className='text-lg xl:text-xl leading-8' header="Est-ce que les interventions du SAMU Benin sont payantes ?">
                    <p className="text-base lg:text-lg lg:leading-8 text-justify">
                        Les interventions primaires telles que les accidents de la route sont gratuites. Cependant, pour d'autres types d'interventions médicales avancées, le SAMU Benin applique une grille tarifaire pour les frais de service.
                    </p>
                </AccordionTab>
                <AccordionTab className='text-lg xl:text-xl leading-8' header="Quelles sont les principales structures de santé affiliées au SAMU Benin ?">
                    <p className="text-base lg:text-lg lg:leading-8 text-justify">
                        Le SAMU Benin collabore avec plusieurs hôpitaux et centres de santé à travers le pays pour assurer une 
                        continuité des soins après l'intervention d'urgence. Ces structures sont équipées pour traiter une gamme 
                        variée de conditions médicales.
                    </p>
                </AccordionTab>
            </Accordion>
        </>
    )
}

export default FAQ;