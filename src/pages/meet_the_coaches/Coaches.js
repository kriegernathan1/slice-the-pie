import './Coaches.css';
import React from "react";
import Footer from "../footer/footer.js"
import introPhoto from "./fabio_ufc.jpeg"
import aaron from "./aaronProfile.jpeg";
import chuy from "./chuyProfile.jpeg";
import fabio from "./fabioProfile.png";
import hector from "./hectorProfile.jpeg";
import alex from "./alexProfile.jpeg";
import rodney from "./rodneyProfile.jpeg";
import jason from "./jasonProfile.jpeg";
import marques from "./marquesProfile.png";
import sam from "./samProfile.png";
import big_aaron from './big_aaron_coach.jpeg'



function Coaches(props){
    return (
        <div className='meet-the-coaches-container'>

            <section className='coaches-intro-section'>
                <h1>Coaches at Team Alpha</h1>

                <div className='intro-container'>

                    <div className='intro-photo-holder'>
                        <img alt="team head coach with student" loading="eager" src={introPhoto}/>

                        {/* <figcaption>Coach Fabio (left) and Uriah Faber <br/>(former WEC Bantamweight 
                            Chamption) 
                        </figcaption> */}

                    </div>
                    
                    <p>
                        At Team Alpha we are lead by our head instructor Fabio Prado 
                        (left) a 2X IBJJF NO-GI World Champion, 3X Rio State Champion, 
                        and Brazillian Jiu-Jitsu coach for multiple champions in both 
                        MMA and Jiu-Jitsu
                    </p>

                </div>

            </section>
            
            <section className='coaches-profile-section'>
                
                <h1> Our Coaching Staff </h1>

                <div className='coaches-container'>

                    <div className='coach'>
                        <img alt='fabio prado picture' loading="lazy" src={fabio}/>
                        <h3>Fabio Prado</h3>
                        <p>
                            Professor Fabio Prado is a multi time world and national 
                            champion and 4th degree Black Belt under Carlson Gracie. He is a pioneer of the 
                            BJJ scene in California coaching some of the biggest names in MMA and jiujitsu.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="Coach marques profile picture" loading="lazy" src={marques}/>
                        <h3>Marques Jones</h3>
                        <p>
                            Professor Marques is a black belt under Fabio Prado and has 
                            been training BJJ for 14 years.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="coach chuy profile picture" loading="lazy" src={chuy}/>
                        <h3>Chuy</h3>
                        <p>
                            Coach Chuy is a brown belt under Fabio Prado and has been training over 10 years. 
                            He teaches both Gi and NoGi classes and is a stickler for a strong foundation in the fundamentals. 
                            In his down time he is either taking care of his horses or his new grandkids.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="coach kaiju profile picture" loading="lazy" src={aaron}/>
                        <h3>Kaiju</h3>
                        <p>
                            Coach Kaiju is a brown belt under Fabio Prado and has been training BJJ for 
                            almost 10 years. He is one of the most decorated competitors within our 
                            affiliate network and is finishing up his degree in Kinesiology at SFSU.  
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="sam tanner profile picture" loading="lazy" src={sam}/>
                        <h3>Sam Tanner</h3>
                        <p>
                            Coach Sam is a Brown Belt under Fabio Prado and 
                            has been training for about 10 years. He has a background in MMA and wrestling 
                            which he started in 4th grade.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="coach alex profile picture" loading="lazy" src={alex}/>
                        <h3>Alex</h3>
                        <p>
                            Coach Alex is our kids program head instructor and has been training BJJ for 10 
                            years with Fabio Prado. He’s is entering his freshman year of college 
                            majoring in Marine Biology.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="Coach hector profile picture" loading="lazy" src={hector}/>
                        <h3>Hector</h3>
                        <p>
                            Coach Hector is our head striking coach with nearly 30 years experience in Muay 
                            Thai of which he fought for well over a decade at the highest level. He is 
                            also a blue belt under Fabio Prado and loves “wingstop”.
                        </p>
                    </div>

                 
                    


                    <div className='coach'>
                        <img alt="coach rodney profile picture" loading="lazy" src={rodney}/>
                        <h3>Rodney</h3>
                        <p>
                            Coach Rodney is our head wrestling coach and has been 
                            wrestling and coaching for over 15 years. Now he’s learning to incorporate 
                            those skills to BJJ.
                        </p>
                    </div>

                    <div className='coach'>
                        <img alt="coach Aaron profile picture" loading="lazy" src={big_aaron}/>
                        <h3>Aaron</h3>
                        <p>
                            Coach Aaron has been training off and on for 4 years and handles all the behind the 
                            scenes aspects of the academy. When he’s not at the academy on the mats, 
                            he’s running his bike shop a few blocks away.
                        </p>
                    </div>


                    

                    



                    {/* <div className='coach'>
                        <img alt="coach jason profile picture" loading="lazy" src={jason}/>
                        <h3>Jason</h3>
                        <p>
                            Coach Jason is our Judo coach where he is a Nidan/2nd deg Black Belt in addition 
                            to being a Purple Belt in BJJ under Fabio Prado. Jason is an avid competitor.
                        </p>
                    </div> */}



                    

                </div>




            </section>

            
            <Footer mainClass='coaches-footer'/>
        </div>



    )
}

export default Coaches;