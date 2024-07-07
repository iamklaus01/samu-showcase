import client_1 from '../assets/images/partenaires/cnhu.png'
import client_2 from '../assets/images/partenaires/hagnon.png'
import client_3 from '../assets/images/partenaires/logo_clp.png'
import client_4 from '../assets/images/partenaires/cnhu.png'
import client_5 from '../assets/images/partenaires/hagnon.png'
import client_6 from '../assets/images/partenaires/logo_clp.png'
import { Carousel } from 'primereact/carousel'

const Partners = () => {
    const clients = [client_1, client_2, client_3, client_4, client_5, client_6]

    const client_template = (client) => {
        return (
            <div className="single-clients w-48 md:w-64 xl:w-72 text-center">
                <img src={client} alt="#" />
            </div>
        )
    }

    const responsive_options = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className="clients overlay overflow-x-hidden">
			<div className="container mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full flex justify-center items-center gap-y-8 flex-wrap max-w-full">
                        <Carousel 
                            circular={true}
                            // responsiveOptions={responsive_options}
                            value={clients} 
                            showIndicators={false} 
                            showNavigators={false} 
                            autoplayInterval={3000}
                            numVisible={3}
                            numScroll={3}
                            itemTemplate={client_template} 
                        />
					</div>
				</div>
			</div>
		</div>
    )
}


export default Partners