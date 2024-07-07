/* eslint-disable react/prop-types */
import section_img from '../assets/images/section-img.png'
import MedicalCoverForm from './forms/MedicalCoverForm';


const MedicalCover  = ({handle_submit, loading_btn}) => {

    const local_handle_submit = (e) => {
        e.preventDefault();
        handle_submit(e);
    }
    
    return (
        <section id="medical-cover" className="my-8">
			<div className="container mx-auto flex flex-col items-center gap-y-8">
                <div className="w-full">
                    <div className="section-title">
                        <h2>Réservez une couverture médicale</h2>
                        <img src={section_img} alt="#" />
                        <p>Que ce soit pour des événements ou des situations spécifiques, le SAMU Benin vous offre une couverture médicale optimale et une assistance immédiate. <br />Remplissez le formulaire ci-dessous pour initier une demande.</p>
                    </div>
                </div>
                <MedicalCoverForm on_submit={local_handle_submit} loading_btn={loading_btn} />
            </div>
        </section>
    )
}

export default MedicalCover