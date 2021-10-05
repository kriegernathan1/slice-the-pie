import './Pricing.css';
import React from "react";
import Footer from "../footer/footer";

function Pricing(props){
    return (

        <div className='pricing-page-container'>
             <div className='pricing-container'>
            <h1> General Pricing</h1>
            
            <div className='card-holder'>
            <div className='pricing-card basic-package'>
                    <h3>Jiu-Jitsu Package</h3>
                    <p className='price'>*$175<span>/mo</span></p>

                    <ul>
                        <li>
                            Unlimited BJJ Classes per week
                        </li>
                        <li>
                            Free Team Alpha T-Shirt with sign up
                        </li>

                        <li>
                            Discounted Products with affiliates
                        </li>
                    </ul>

                </div>

                <div className='pricing-card unlimited-package'>
                    <h3>Unlimited Package</h3>
                    <p className='price'>*$195<span>/mo</span></p>

                    <ul>
                        <li>
                            Unlimited BJJ, Judo, Muay Thai, and Wrestling
                        </li>
                        <li>
                            Free Team Alpha T-Shirt with sign up
                        </li>

                        <li>
                            Discounted Products with affiliates
                        </li>
                    </ul>
                    
                </div>

                <div className='pricing-card kids-package'>
                    <h3>Kids Package</h3>
                    <p className='price'>*$145<span>/mo</span></p>

                    <ul>
                        <li>
                            Five Brazillian Jiu-Jitsu Classes per week
                        </li>
                        <li>
                            Free Team Alpha T-Shirt with sign up
                        </li>

                        <li>
                            Discounted Products with affiliates
                        </li>
                    </ul>
                    
                </div>

            </div>

            <div id='pricing-cta' className='button-holder'> 
                <a href='https://tabjj.pushpress.com/open/interested' target="_blank" rel="noreferrer">
                    <button  className='cta-button'>Try a Free Class</button>
                </a>
            </div>

            <div className='pricing-disclosure-holder'>
                <p className='pricing-disclosure'>
                    * Substantial discounts for Students, Military/First Responders, and Family packages. 
                    Please contact us to discuss case by case pricing if needed.
                </p>
            </div>
           
            

           
                
        </div>

            <Footer mainClass='pricing-footer'/>
        </div>
       
    )
}

export default Pricing;