import React from 'react';
import './Scheduling.css';
import {BsArrowRight} from "react-icons/bs";

interface SchedulingProps {
    callToAction: string;
}

const Scheduling: React.FC<SchedulingProps> = ({callToAction}) => {
    return (
        <section className="schedule-container">
            <text className="schedule-text">{callToAction}</text>
            <div className='set-call-to-action'>
                <BsArrowRight/>
            </div>
        </section>

    )
}
export default Scheduling;
