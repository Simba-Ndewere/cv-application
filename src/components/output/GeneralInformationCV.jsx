import { useState } from 'react'
import '../../styles/GeneralInformationCV.css'
function GeneralInformationCV({generalInfo}) {
    
    return (
        <div className='generalContainerCV'>
            <p className='fullname'>{generalInfo.fullName}</p>
            <div className='numEmailAddress'>
                <div className='phone'>
                    {generalInfo.phoneNumber}
                </div>
                <div className='email'>
                    {generalInfo.email}
                </div>
                <div className='address'>
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