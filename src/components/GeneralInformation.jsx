import { use } from 'react';
import { useState } from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <div className='general'>
            <div className='generalContainer'>
                <h2>General Information</h2>
                <label className='custom-field'>
                    <input type='text' required />
                    <span className='placeholder'>first name</span>
                </label>

                <label className='custom-field'>
                    <input type='text' required />
                    <span className='placeholder'>last name</span>
                </label>

                <label className='custom-field'>
                    <input type='email' required />
                    <span className='placeholder'>email</span>
                </label>

                <label className='custom-field'>
                    <input type='phone' required />
                    <span className='placeholder'>phone</span>
                </label>

            </div>
        </div>
    )
}

export default GeneralInformation;