import React from 'react'
import Img1 from '../Assets/image1.png'
import '../Style/WelcomePage.css'
const WelcomePage = () => {
    return (
        <div className='welcome-page'>
            <div className="welcome-container">
                <div className="welcome-page-left">
                    <div className="heading">
                        <h1><p>Welcome to</p>
                            <p> RecruitMantra</p></h1>
                    </div>
                    <p className='welcome-page-left-p'>We are dedicated to preparing you for your upcoming interviews
                        through our comprehensive levels of interview preparation. Our goal
                        is to instill confidence in you and equip you with the skills and
                        knowledge needed to excel in your interviews, ultimately making you
                        job-ready. With our tailored approach and real time analysis of your
                        interview, we ensure that you are fully prepared to tackle any
                        interview scenario with confidence and success.</p>
                </div>
                <div className="welcome-page-right">
                    <img src={Img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
