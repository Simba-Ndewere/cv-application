import { useState } from 'react'
import '../../styles/GeneralInformationCV.css'
function GeneralInformationCV() {

    return (
        <div className='generalContainerCV'>
            <p className='fullname'>John Doe</p>
            <div className='numEmailAddress'>
                <div className='phone'>
                    012456890
                </div>
                <div className='email'>
                    johndoe@gmail.com
                </div>
                <div className='address'>
                    london
                </div>
            </div>
            <div className='personalStatement'>
                <p className='titleCV'>Personal Statement</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default GeneralInformationCV;