import { use } from 'react';
import { useState } from 'react';
import '../../styles/GeneralInformation.css';

function GeneralInformation({ setGeneralInfo }) {

    function handleSubmit(formData) {
        const fullname = formData.get("fullname").toString();
        const email = formData.get("email").toString();;
        const phone = formData.get("phone").toString();;
        const address = formData.get("address").toString();;
        const statement = formData.get("statement").toString();;

        setGeneralInfo({fullName:fullname,email:email,phoneNumber:phone,address:address,personalStatement:statement});
    }

    return (
        <div className='general'>

            <div className='generalContainer'>
                <form className='form' action={handleSubmit}>
                    <p className='title'>General Information</p>
                    <div className='form-group'>
                        <label>
                            <input type='text' name="fullname" placeholder="Full name" required />
                        </label>
                        <label>
                            <input type='email' name="email" placeholder="Email" required />
                        </label>
                        <label>
                            <input type='phone' name="phone" placeholder="Phone number" required />
                        </label>
                        <label>
                            <input type='text' name="address" placeholder="Address" required />
                        </label>
                        <label>
                            <textarea className="summary" name="statement" placeholder="Personal statement" required></textarea>
                        </label>
                        <button type="submit" className='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default GeneralInformation;