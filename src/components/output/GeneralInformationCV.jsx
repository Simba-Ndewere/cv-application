import { useState } from 'react'
import '../../styles/GeneralInformationCV.css'
import phoneImg from '../../assets/phone-call.png'
import mailImg from '../../assets/mail.png'
import addressImg from '../../assets/location-pin.png'

function GeneralInformationCV({generalInfo}) {
    
    return (
        <div className='generalContainerCV'>
            <p className='fullname'>{generalInfo.fullName}</p>
            <div className='numEmailAddress'>
                <div className='phone'>
                    <img src={phoneImg}></img>
                    {generalInfo.phoneNumber}
                </div>
                <div className='email'>
                    <img src={mailImg}></img>
                    {generalInfo.email}
                </div>
                <div className='address'>
                    <img src={addressImg}></img>
                    {generalInfo.address}
                </div>
            </div>
            <div className='personalStatement'>
                <p className='titleCV'>Personal Statement</p>
                <p>{generalInfo.personalStatement}</p>
            </div>
        </div>
    )
}

export default GeneralInformationCV;