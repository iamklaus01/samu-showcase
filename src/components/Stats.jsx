
import { Icon } from "@iconify/react";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <div id="stats" className="stats section overlay">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-around items-center w-full">
					<div className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
						<div className="single-stat">
                            <Icon icon="healthicons:ambulance" className="stat-icon"/>
							<div className="content">
                                <CountUp end={896} duration={3}/><span>+</span>
								<p>Interventions par an</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
						<div className="single-stat">
                            <Icon icon="healthicons:inpatient" className="stat-icon"/>
							<div className="content">
                                <CountUp end={856} duration={3}/><span>+</span>
								<p>Patients transportés</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
						<div className="single-stat">
							<Icon icon="mdi:doctor" className="stat-icon"/>
							<div className="content">
                                <CountUp end={22} duration={3}/><span>+</span>
								<p>Personnel médical</p>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
						<div className="single-stat">
                            <Icon icon="heroicons-solid:thumb-up" className="stat-icon"/>
							<div className="content">
                                <CountUp end={90} duration={3}/>
								<p>Satisfaction (%)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Stats