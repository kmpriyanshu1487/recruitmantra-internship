import React from 'react'
import '../Style/Interviews.css'
import Beginner from '../Assets/beginner.png'
import Intermidiate from '../Assets/intermidiate.png'
import Advance from '../Assets/advance.png'
import Img2 from '../Assets/image2.png'
const Interviews = () => {
    return (
        <div className='interwier-container'>
            <h1>Interviews</h1>
            <div className="card-container">
                <div className="card">
                    <img className='card-img' src={Beginner} alt="" />
                    <div className='card-bottom'>
                        <div className='card-heading-logo'>

                            <img src={Img2} alt="" />
                            <p>Beginner</p>
                        </div>
                        <div className='card-content'>
                            <p>Three Questions Must be attempted</p>
                            <p>Fee: 10 Coins</p>
                            <p>Reward: 10-20 Coins</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-img' src={Intermidiate} alt="" />
                    <div className='card-bottom'>
                        <div className='card-heading-logo'>

                            <img src={Img2} alt="" />
                            <p>Intermediate</p>
                        </div>
                        <div className='card-content'>
                            <p>Three Questions Must be attempted</p>
                            <p>Fee: 10 Coins</p>
                            <p>Reward: 10-20 Coins</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-img' src={Advance} alt="" />
                    <div className='card-bottom'>
                        <div className='card-heading-logo'>

                            <img src={Img2} alt="" />
                            <p>Advance</p>
                        </div>
                        <div className='card-content'>
                            <p>Three Questions Must be attempted</p>
                            <p>Fee: 10 Coins</p>
                            <p>Reward: 10-20 Coins</p>
                        </div>
                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default Interviews
