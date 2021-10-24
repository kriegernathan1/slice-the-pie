import './Faq.css';
import React from "react";
import Footer from "../footer/footer";
import Question from "./question.js"

function Faq(props){
    var q1 = "Is Jiu-Jitsu for me";
    var a1 = "The short answer, YES! At Team Alpha our members come from all walks of life. \
    We strive on building our members from the ground up. So, the only thing you \
    need to do well, is a good attitude and persistence.";

    var q2 = "Should I be in shape before I start ";
    var a2 = "Absolutely not! Our program is designed to be accessible by \
            everyone and is a great way to get in shape if you so please.";
    
    var q3 = "What will my first class look like";
    var a3 = "That’s up to you! Typically, people trying a class will follow a typical \
            class structure: group warmups, partner drilling, and finish the class will \
            some positional sparring. But this is all optional. If instead you want to \
            observe the class and see if it’s the right fit, that’s great too. It’s free and \
            flexible! So click below and schedule your first class today.";

    var q4 = "What should I bring to my first class";
    var a4 = "While nothing is required for your first class, we recomend bringing \
    shorts and a T-shirt you feel comfortable working out in. ";

    return (
        <div className='faq-page-container'>

            <div className='main-content-faq'>

                
            </div>



            <div className='question-container'>
                <h1> FAQ Page</h1>
                
                <Question question={q1} answer={a1}/>

                <Question question={q2} answer={a2}/>

                <Question question={q3} answer={a3}/>

                <Question question={q4} answer={a4}/>

                <a href='https://tabjjucd.pushpress.com/open/interested' rel="noreferrer" target="_blank">
                    <button id='faq-cta' className='cta_button'>Try A Free Class</button>
                </a>

            </div>

            <Footer mainClass='faq-footer'/>

        </div>
        



    )
}

export default Faq;