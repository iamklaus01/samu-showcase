import About from "../components/About"
import CallToAction from "../components/CallToAction"
import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Loader from "../components/Loader"
import MedicalCover from "../components/MedicalCover"
import NavBar from "../components/NavBar"
import Process from "../components/Process"
import ScrollToTop from "../components/ScrollToTop"
import Services from "../components/Services"
import Stats from "../components/Stats"
import TopHeader from "../components/TopHeader"
import ScheduledInterventionForm from './../components/forms/ScheduledIntervention';

import {Dialog} from 'primereact/dialog';
import { useRef, useState } from "react";
import FAQ from './../components/FAQ';

import { Toast } from 'primereact/toast';
import { new_medical_cover, store_scheduled_intervention } from "../services"

const Landing = () => {
    const [dialog_visible, setDialogVisible] = useState(false);
    const [loading_btn, setLoadingBtn] = useState(false);

    const toast = useRef(null);
    const handle_scheduled_intervention_submit = async (e) => {
        e.preventDefault();
        try {
            const data = await store_scheduled_intervention(e);
            console.log(data);
            toast.current.show({ severity: 'success', summary: 'Success', detail: "Succès de l'opération. Une équipe vous contactera incessament !", life: 3000 });
            setLoadingBtn(false);
            setDialogVisible(false);
        } catch (error) {
            toast.show({ severity: 'error', summary: 'Error', detail: "Une erreur est survenue. Veuillez réessayer!", life: 3000 });
            setLoadingBtn(false);
            setDialogVisible(false);
        }
    }

    const handle_medical_cover_submit = async (e) => {
        setLoadingBtn(true);
        try {
            const data = await new_medical_cover(e);
            console.log(data);
            toast.current.show({ severity: 'success', summary: 'Success', detail: "Succès de l'opération. Une équipe vous contactera incessament !", life: 3000 });
            setLoadingBtn(false);
        } catch (error) {
            toast.show({ severity: 'error', summary: 'Error', detail: "Une erreur est survenue. Veuillez réessayer!", life: 3000 });
            setLoadingBtn(false);
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <Loader />

            <header className="header">
                <TopHeader />
                <NavBar />
            </header>


            <HeroSection />

            <Features show={setDialogVisible} />

            <Process />

            <Stats />

            <About />

            <CallToAction show={setDialogVisible}/>

            <Services />

            <MedicalCover handle_submit={handle_medical_cover_submit} loading_btn={loading_btn}/>

            <div className="flex justify-center items-stretch w-full my-8">
                <div className="relative bg-secondary hidden lg:flex justify-center items-center w-1/2 2xl:w-1/3">
                    <h2 className="three-d-text">
                        FAQ
                    </h2>
                </div>

                <div className="w-full lg:w-1/2 2xl:w-2/3 px-4 lg:px-8">
                    <FAQ />
                </div>

            </div>


            <Footer />

            <Dialog header="Demande d'assistance programmée" visible={dialog_visible} onHide={() => {if (!dialog_visible) return; setDialogVisible(false); }}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <ScheduledInterventionForm on_submit={handle_scheduled_intervention_submit} />
            </Dialog>

            <ScrollToTop />


        </>
    )
}

export default Landing