import { use } from 'react';
import { useState } from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <div className='generalContainer'>
            <h2>General Information</h2>
            <label className='custom-field'>
                <input type='text' required/>
                <span class='placeholder'>first name</span>
            </label>

            <label className='custom-field'>
                <input type='text' required/>
                <span class='placeholder'>last name</span>
            </label>
            
            <label className='custom-field'>
                <input type='email' required/>
                <span class='placeholder'>email</span>
            </label>
            
            <label className='custom-field'>
                <input type='phone' required/>
                <span class='placeholder'>phone</span>
            </label>
            
        </div>
    )
}

export default GeneralInformation;