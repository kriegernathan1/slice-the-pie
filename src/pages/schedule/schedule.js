import './schedule.css';
import React from "react";
import Footer from "../footer/footer";
import schedule_photo from './Schedule_100421.jpeg'

function Schedule(props){


    return(
        <div>
            <div className='schedule-wrapper'>
                <h1>Class Schedule</h1>
                <img alt="class schedule" src={schedule_photo}/>
            </div>
            
            <Footer mainClass='schedule-footer'/>

        </div>

        
        



    );

}

export default Schedule;