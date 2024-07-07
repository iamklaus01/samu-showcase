/* eslint-disable react/prop-types */
import { Sidebar } from 'primereact/sidebar';
import logo from '../assets/images/logo.png';

const MobileMenu = ({visible, setVisible}) =>{
    return (
        <div className="flex justify-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={() => (
                    <div className="min-h-screen flex relative">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-col h-full">
                                
                                <div className="overflow-y-auto flex flex-col gap-4 py-4">
                                    <div className="logo w-full flex items-center justify-center pt-8">
                                        <img src={logo} alt="SAMU BENIN" className="w-12" />
                                    </div>
                                    <ul className="list none space-y-4 text-lg py-8 pl-4">
                                        <li className="border-l-4 border-secondary rounded-s pl-2"><a href="#">Accueil</a></li>
                                        <li className="border-l-4 border-secondary rounded-s pl-2"><a href="#about">Nous découvrir</a></li>
                                        <li className="border-l-4 border-secondary rounded-s pl-2"><a href="#services">Nos services</a></li>
                                        <li className="border-l-4 border-secondary rounded-s pl-2"><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        
export default MobileMenu