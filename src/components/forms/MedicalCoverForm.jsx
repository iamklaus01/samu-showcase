/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import {InputMask} from "primereact/inputmask";

import LoadingButton from './LoadingButton';

const MedicalCoverForm = ({on_submit, loading_btn}) => {
    const types = [
        "Couverture d'urgence",
        "Couverture pour consultations préventives",
        "Couverture pour transport médicalisé",
        "Couverture pour événements spéciaux (mariages, concerts, etc.)",
        "Couverture pour soins palliatifs"
    ];

    return (
        <form className="w-full" onSubmit={on_submit}>
            <div className="w-full lg:w-3/4 2xl:w-2/3 mx-auto flex flex-col justify-center items-center gap-4 md:gap-8 px-4 md:px-8">
                <div className="w-full">
                    <label htmlFor="name" className="text-base mb-2">Nom & Prénom(s)</label>
                    <InputText id="name" name="name" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                </div>

                <div className="flex flex-wrap justify-center items-center w-full mb-4 gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <label htmlFor="email" className="text-base mb-2">Adresse mail</label>
                        <InputText id="email" name="email" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label htmlFor="phone" className="text-base mb-2">N° de téléphone</label>
                        <InputMask id="phone" name="phone" mask="(999) 99-99-99-99" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center w-full mb-4 gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <label htmlFor="type" className="text-base mb-2">Type de couverture</label>
                        <select id="type" name="type" className="py-2.5 px-4 border border-gray-200 w-full rounded">
                            {types.map((type, index) => (
                                <option key={index} value={type}>{type.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label htmlFor="nth_people" className="text-base mb-2">Estimation du nombre de personnes</label>
                        <input type="number" id="nth_people" name="nth_people" min={3} className="py-2 px-4 border border-gray-200 w-full rounded" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center w-full mb-4 gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <label htmlFor="start_date" className="text-base mb-2">Date de début de la couverture</label>
                        <input type="date" id="start_date" name="start_date" className="py-2 px-4 border border-gray-200 w-full rounded" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label htmlFor="duration" className="text-base mb-2">Durée en jours de la couverture</label>
                        <input type="number" id="duration" name="duration" min={1} className="py-2 px-4 border border-gray-200 w-full rounded" /> 
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="description" className="text-base mb-2">Description de la couverture</label>
                    <InputTextarea id="description" name="description" rows={5} cols={30} className="py-2 px-4 border border-gray-200 w-full"/>
                </div>
                
                <div className="w-full">
                    <label htmlFor="indication" className="text-base mb-2">Indication du lieu de la couverture</label>
                    <InputTextarea id="indication" name="indication" rows={5} cols={30} className="py-2 px-4 border border-gray-200 w-full"/>
                </div>

                <div className="w-full flex items-center justify-center">
                    <LoadingButton loading={loading_btn} label="Valider" />
                </div>
            </div>

        </form>
    )
}

export default MedicalCoverForm;