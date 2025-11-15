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
                <form className='form'>
                    <p className='title'>General Information</p>
                    <div className='form-group'>
                        <label>
                            <input type='text'  placeholder="Full name" required />
                        </label>
                        <label>
                            <input type='email'  placeholder="Email" required />
                        </label>
                        <label>
                            <input type='phone' placeholder="Phone number"required />
                        </label>
                        <label>
                            <input type='text'  placeholder="Address" required />
                        </label>
                        <label>
                            <textarea className="summary" placeholder="Summary" required></textarea>
                        </label>
                        <button className='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default GeneralInformation;