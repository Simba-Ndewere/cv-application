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
            <input
                placeholder='First name'
                type='text'
            />
            <input
                placeholder='Last name'
                type='text'
            />
            <input
                placeholder='Email'
                type='email'
            />
            <input
                placeholder='Phone Number'
                type='phone'
            />
        </div>
    )
}

export default GeneralInformation;