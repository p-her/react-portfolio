import React, { useState } from "react";
import { validateEmail } from '../../src/utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){

        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid.')
            }else{
                setErrorMessage('');
            }
            // console.log(isValid) 
        }else{
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            }else{
                setErrorMessage('');
            }
        }
        // the name property of target in the preceding expression actually refers to
        // the name attribute of the form element. This attribute value matches the property
        // names of formState (name, email and message) and allows us to use [] to create dynamic property names
        // setFormState({...formState, [e.target.name]: e.target.value })

        // console.log('errorMessge: ', errorMessage);

        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }
    // can be delete: this sync with the form input 
    // console.log(formState); 


    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-section">
            <h1 className="h1tag ">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onChange={handleChange} defaultValue={email}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"  onChange={handleChange} defaultValue={message}/>
                </div>
             
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

          

            
                    <button className="button" type="submit">Submit</button>
             
            </form>
        </section>
    );
}

export default Contact;