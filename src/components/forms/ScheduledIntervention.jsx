/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import {InputMask} from "primereact/inputmask";

import LoadingButton from './LoadingButton';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from "react";

const ScheduledInterventionForm = ({on_submit}) => {

    const [loading, setLoading] = useState(false);

    const types = [
        "Transport néonatal",
        "Transfert hospitalier",
        "Accouchement",
        "Intervention pédiatrique",
        "Intervention chirurgicale",
        "Dialyse",
        "Radiothérapie",
        "Chimiothérapie",
        "Transport de patients pour consultations spécialisées",
        "Transport pour imagerie médicale (IRM, scanner)",
    ];    

    const genders = [
        "Masculin",
        "Feminin",
        "Autre"
    ];

    const handle_submit = (e) => {
        setLoading(true);
        e.preventDefault();
        on_submit(e);
    }

    return (
        <form className="w-full" onSubmit={handle_submit}>
            <div className="w-full mx-auto flex flex-col justify-center items-center gap-4 md:gap-8 px-4 md:px-8">
                <div className="w-full">
                    <label htmlFor="caller_name" className="text-base mb-2">Nom & Prénom(s) du demandeur d'assitance</label>
                    <InputText id="caller_name" name="caller_name" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                </div>

                <div className="flex flex-wrap justify-center items-center w-full mb-4 gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <label htmlFor="email" className="text-base mb-2">Adresse mail du demandeur</label>
                        <InputText id="email" name="email" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label htmlFor="phone" className="text-base mb-2">N° de téléphone du demandeur</label>
                        <InputMask id="phone" name="phone" mask="(999) 99-99-99-99" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="name" className="text-base mb-2">Nom & Prénom(s) du patient</label>
                    <InputText id="name" name="name" className="py-2 px-4 border border-gray-200 w-full shadow-none" />
                </div>

                <div className="w-full">
                    <label htmlFor="date" className="text-base mb-2">Date et heure de l'intervention</label>
                    <input type="datetime" id="date" name="date" className="py-2 px-4 border border-gray-200 w-full" />
                </div>
                <div className="w-full">
                    <label htmlFor="type" className="text-base mb-2">Motif de l'intervention</label>
                    <select id="type" name="type" className="py-2 px-4 border border-gray-200 w-full">
                        {types.map((type, index) => (
                            <option key={index} value={type}>{type.toUpperCase()}</option>
                        ))}
                    </select>
                </div>


                <div className="flex flex-wrap justify-center items-center w-full mb-4 gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/2 lg:pr-4">
                        <label htmlFor="gender" className="text-base mb-2">Genre du patient</label>
                        <select id="gender" name="gender" className="py-2 px-4 border border-gray-200 w-full">
                            {genders.map((gender, index) => (
                                <option key={index} value={gender}>{gender.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <label htmlFor="age" className="text-base mb-2">Age du patient</label>
                        <input type="number" id="age" name="age" step={0.1} className="py-2 px-4 border border-gray-200 w-full" /> 
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="conscious" className="text-base mb-2">Etat de conscience du patient</label>
                    <div className="w-full flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center ps-4 border border-gray-200 rounded flex-auto">
                            <input id="conscious-1" type="radio" value="yes" name="conscious" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="conscious-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Conscient</label>
                        </div>
                        <div className="flex items-center ps-4 border border-gray-200 rounded flex-auto">
                            <input id="conscious-2" type="radio" value="no" name="conscious" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="conscious-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pas Conscient</label>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="pressure" className="text-base mb-2">Hemodynamique</label>
                    <div className="flex items-center flex-wrap mb-4">
                        <div className="p-inputgroup w-full lg:w-1/3 lg:pr-4 shadow-none mb-4 lg:mb-0">
                            <InputNumber placeholder="Tension artérielle" className="py-2 px-4 border border-gray-200 w-full shadow-none"/>
                            <span className="p-inputgroup-addon">mmHg</span>
                        </div>

                        <div className="p-inputgroup w-full lg:w-1/3 lg:pr-4 shadow-none mb-4 lg:mb-0">
                            <InputNumber placeholder="Pouls" className="py-2 px-4 border border-gray-200 w-full shadow-none"/>
                            <span className="p-inputgroup-addon">BPM</span>
                        </div>

                        <div className="p-inputgroup w-full lg:w-1/3 shadow-none mb-4 lg:mb-0">
                            <InputNumber placeholder="Température" className="py-2 px-4 border border-gray-200 w-full shadow-none"/>
                            <span className="p-inputgroup-addon">&deg;</span>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div className="p-inputgroup w-full lg:w-1/3 lg:pr-4 shadow-none mb-4 lg:mb-0">
                            <InputText placeholder="Coloration" className="py-2 px-4 border border-gray-200 w-full shadow-none"/>
                        </div>

                        <div className="p-inputgroup w-full lg:w-1/3 lg:pr-4 shadow-none mb-4 lg:mb-0">
                            <InputNumber placeholder="Poids" className="py-2 px-4 border border-gray-200 w-full shadow-none"/>
                            <span className="p-inputgroup-addon">Kg</span>
                        </div>

                        <div className="p-inputgroup w-full lg:w-1/3 shadow-none mb-4 lg:mb-0">
                            <InputText placeholder="Autres" className="py-2.5 px-4 border border-gray-200 w-full shadow-none"/>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="conscious" className="text-base mb-2">Etat de conscience du patient</label>
                    <div className="w-full flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center ps-4 border border-gray-200 rounded flex-auto">
                            <input id="conscious-1" type="radio" value="yes" name="conscious" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="conscious-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Conscient</label>
                        </div>
                        <div className="flex items-center ps-4 border border-gray-200 rounded flex-auto">
                            <input id="conscious-2" type="radio" value="no" name="conscious" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="conscious-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pas Conscient</label>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="zone" className="text-base mb-2">Lieu de l'intervention</label>
                    <InputText id="zone" name="zone" className="py-2 px-4 border border-gray-200 w-full" />
                </div>
                
                <div className="w-full">
                    <label htmlFor="indication" className="text-base mb-2">Situation géographique du lieu de l'intervention</label>
                    <InputTextarea id="indication" name="indication" rows={5} cols={30} className="py-2 px-4 border border-gray-200 w-full"/>
                </div>

                <div className="w-full flex items-center mb-4 justify-center">
                    <LoadingButton loading={loading} label="Valider" />
                </div>
            </div>

        </form>
    )
}

export default ScheduledInterventionForm;