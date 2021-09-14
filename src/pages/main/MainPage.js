import './MainPage.css';
import React, { useState, useEffect } from 'react';
import tam_main_img from "./group_photo_nogi.jpeg"
import about_us_img from "./tam_about_us_img.png"
import Footer from "../footer/footer";
import {init} from 'emailjs-com'
import isEmail from 'validator/lib/isEmail';
import { v4 as uuidv4 } from 'uuid';

init("user_aFJsQlXOkSXOAgBAlM8Wf");

function MainPage(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorStyleName, setNameError] = useState({});
    const [errorStyleEmail, setEmailError] = useState({})
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [failedMessage, setFailedMessage] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(1);

    //Once button is disabled then continue with ajax call 
    useEffect(() => {
        if(disabled == true && count == 1)
        {
            ensure_form_input();
            
        }
    }, [disabled])

    /**
     * Checks user inputted name and email. If either is incorrect an error message is shown and on_submit is not called
     * otherwise on_submit is called
     */
    function ensure_form_input(event){
        var email_wrong = false;
        var name_wrong = false;

        //check if name fits parameters
        const regex_name = /^[a-z ,.'-]+$/i;
        const correct_name = regex_name.test(name);


        //check if email fits parameters 
        const correct_email = isEmail(email);

        //styling for error form
        const errorStyle = {
            'boxShadow': 'inset 0px -10px 1px -7px #cc0000'
        };

        //Reset any previous states of validation messages and style
        setErrorMessage('');
        setShowError(false);
        setEmailError({});
        setNameError({});


        //handle if either form is empty
        if(name.trim() == '' || email.trim() == '')
        {            

            //if name and email is blank 
            if(name.trim() =='' && email.trim() == '')
            {
                setErrorMessage('Both forms must be filled out. Please try again.')
                setNameError(errorStyle)
                setEmailError(errorStyle)
            }
            
            //if name is blank 
            else if(name.trim() =='')
            {
                setNameError(errorStyle)
                setErrorMessage('Both forms must be filled out. Please try again.')
            }
            
            else if(email.trim() == '')
            {
                setEmailError(errorStyle)
                setErrorMessage('Both forms must be filled out. Please try again.')
            }
            
            setShowError(true)

            return;
        }

        //handle name is illegal 
        else if(!correct_name){
            setErrorMessage('Please only use alphabetical characters and hyphens for name.');
            setEmailError(errorStyle)
            setShowError(true);
            //show red border for name
            return;
        }
        else if(!correct_email){
            setErrorMessage('The email you entered is incorrect.')
            setEmailError(errorStyle)
            setShowError(true);
            return

        }


        setCount(count + 1);//prevents multiple clicks 

        on_submit(event)


    }


    /**
     * Sends post requests to emailjs to 
     * @param {} event - provided by browser
     */
    async function on_submit(event){
        //send POST to emailjs
        //serve modal to user instructing them to fill out the form on redirect

        const trial_id = uuidv4();

        const email_json = {
            service_id: 'service_n4dnle9',
            template_id: 'template_t5lp2mg',
            user_id: 'user_aFJsQlXOkSXOAgBAlM8Wf',
            template_params: {
                'user_name': name,
                'user_email':  email,
                'trial_id': trial_id
            }
        }

        const emailjs_url = 'https://api.emailjs.com/api/v1.0/email/send'
        const test_url = 'https://jsonplaceholder.typicode.com/posts'

        const response = await fetch(emailjs_url, {
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(email_json) 
          })

            .then(response => {
                if(response.ok)
                {
                    setSuccessMessage("Thank you! An email has been sent to the address you provided with further information. Please fill out the additional fields on the next page. \
                                    You will be automatically redirected in a few seconds.");

                    setTimeout(() => {  window.open('https://tabjj.pushpress.com/open/interested', '_blank', 'noreferrer, noopener') }, 8000);
                    // setTimeout(() => {  window.open('', '_blank').focus();; }, 5000);
                    setFailedMessage('');
                }
                else{
                    setFailedMessage('An error occurred. Please fill out the form on the next page and we will be in contact soon. You will be redirected in a few seconds.');
                    setSuccessMessage('');
                    setTimeout(() => {  window.open('https://tabjj.pushpress.com/open/interested', '_blank', 'noreferrer, noopener') }, 8000);
                    
                }
                
            })
            .catch(error => {
                console.error('error sending email ', error)

            })

        setDisabled(false)


    }

    return (
        <div className='main-container'>
            <header>
                <img className='tam_main_img' src={tam_main_img} alt='group_photo' />
                <h1> World Class Brazilian Jiu-Jitsu, Grappling, Wrestling, <br/> and Conditioning in Davis, CA </h1>
                <section className='intro_page'>
                    <a target='_blank' rel="noreferrer"href='https://tabjj.pushpress.com/open/interested'>
                        <button className='cta_button'>Try A Free Class</button>
                    </a>

                    <a href='/#About_Us'> Learn More</a>
                </section>

            </header>

            <section id='About_Us' className='about-us'>
                <h1 className='h1-phone' id='About_Us'>About Us</h1> 
                <img src={about_us_img} loading='lazy' alt='group-photo'/>
                <div className='about-us-content'>
                    <h1 id='About_Us'>About Us</h1>

                    <p>
                    Our program was designed and perfected by 4th degree Black Belt, 
                    Professor Fabio Prado under Carlson Gracie Jr. Fabio has been the 
                    long time head Brazilian Jiu-Jitsu coach at Team Alpha Male of 
                    Sacramento and has seen his students win multiple world and 
                    national titles in MMA and Jiu-Jitsu competitions. The Team Alpha 
                    network has multiple affiliates in the Sacramento region and the 
                    Bay Area with Fabio specifically overseeing instruction at 
                    academies in Davis, Dixon, Vacaville and Point Arena. Fabio is 
                    also the Head Instructor for the UC Davis Brazilian Jiu-Jitsu Club.


                    </p>

                    <a target='_blank' rel="noreferrer"href='https://tabjj.pushpress.com/open/interested'>
                        <button className='cta_button cta_about' >Try A Free Class</button>
                    </a>
                </div>
            </section>

            <section className='classes_offered_container' id='Classes' >
                <h1>Classes Offered</h1>

                <div className='classes_offered'>
                    <div className='class-card'>
                        <h2>Brazilian <br/> Jiu-Jitsu</h2>

                        <p>
                            World-class instruction from our premier staff of instructors, affiliate network 
                            guest instructors, and professional fighters. From the basics to advanced 
                            techniques and everything in between, we strive to provide a well rounded 
                            curriculum for all levels.
                        </p>
                    </div>

                    <div className='class-card'>
                        <h2>No-Gi Submission Grappling</h2>

                        <p>
                        No-Gi submission grappling fuses traditional Brazilian Jiu-Jitsu techniques with 
                        Wrestling and other grappling arts to adapt to real world situations. Taught by our 
                        network of elite instructors and professional fighters.
                        </p>
                    </div>

                    <div className='class-card'>
                        <h2>Kids/Teen Brazilian Jiu-Jitsu</h2>

                        <p>
                        With classes for students as young as 5 years old, we offer both Gi and No-Gi
                        instruction that focus on the fundamentals of Brazilian Jiu-Jitsu for self-defense 
                        and sports competition. Class sizes are limited to help facilitate a more productive 
                        learning environment.
                        </p>

                    </div>
                </div>

                <a target='_blank' rel="noreferrer"href='https://tabjj.pushpress.com/open/interested'>
                        <button  className='cta_button cta_classes'>Try A Free Class</button>
                </a>

                
            </section>

            <section className='contact-us'>
                <h1>Try One Week Free!</h1>

                <div className='contact-us-container'> 
                {showError &&
                    <p style={{color:'#cc0000', textAlign: 'center', fontWeight: 'bolder', margin: 0}}>{errorMessage}</p>

                }
                    <input autoComplete="off" style={{"display": "none"}} />
                    <div>
                        <label type='text' htmlFor='name-form'>Name<span>*</span></label>
                        <input style={errorStyleName} id='name-form' name='user_name'placeholder='John Doe' className='contact-us-form' onChange={event => {setName(event.target.value)}}></input>
                    </div>
                    
                    <div>
                        <label htmlFor='email-form'>Email<span>*</span></label>
                        <input style={errorStyleEmail} name='user_email' id='email-form' type='email' placeholder='you@yourmail.com' className='contact-us-form' onChange={event => {setEmail(event.target.value)}} ></input>
                    </div>
                    
                    {/* <div >
                        <label type='date' htmlFor='birthdate-form'>Birthday</label>
                        <input name='' placeholder='01/01/2020' className='contact-us-form'></input>
                    </div> */}
                    
                    {/* <div>
                        <label htmlFor='phone-number-form' >Phone Number<span>*</span></label>
                        <input placeholder='123-456-7890'   type='tel' className='contact-us-form'></input>
                    </div> */}
                    

                        {/* <input placeholder='Select One' className='contact-us-form'></input> */}

                    {/* <div>
                        <label htmlFor='goals-form'>Your Goals<span>*</span></label>
                        <select className='contact-us-form'>
                            <option value="null">--Make A Selection--</option>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Athletic Performance">Athletic Performance</option>
                            <option value="Health Reasons">Health Reasons</option>
                            <option value="Self Defense">Self Defense</option>
                            <option value="Other">Other</option>
                        </select>

                    </div> */}
                    
                        {/* <input placeholder='Select One' className='contact-us-form'></input> */}


                    {/* <div>
                        <label htmlFor='how-did-form'>How Did You Hear About Us?<span>*</span></label>
                        
                        <select  className='contact-us-form'>
                            <option value="null">--Make A Selection--</option>
                            <option value="Walk-In">Walk-In</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Advertisement">Advertisement</option>
                            <option value="Website / Blog">Website / Blog</option>
                            <option value="Exisiting Member">Existing Member</option>
                            <option value="Staff Member">Staff Member</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    
                    <div className='message-form-container'>
                        <label  htmlFor='message-form'>Question or Message?</label>
                        <textarea placeholder='Your Message' className='contact-us-form message-form'></textarea>
                    </div> */}
                    
                </div>

                <div className='btn-holder'>
                        <button id='submit-btn' disabled={disabled} onClick={() => {
                            setDisabled(true);
                        }} className='submit-form-btn'>
                            Submit
                        </button>
                </div>
                
                {successMessage.trim() != '' &&
                    <p style={{textAlign:'center', marginTop:'1em', fontWeight: 'bolder', paddingLeft:'4em', paddingRight: '4em'}}>{successMessage}</p>
                }

                {failedMessage.trim() != '' &&
                    <p style={{textAlign:'center', marginTop:'1em', fontWeight: 'bolder', color: '#cc0000'}} >{failedMessage}</p>
                
                }
                
            </section>

            {/* <div class='divider'></div> */}

         <Footer/>
                
        </div>



    )
}


export default MainPage