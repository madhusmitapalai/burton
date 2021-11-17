import React from 'react'
import '../components/banner.css'

const Intro = () => {
    return (
        <div className='i'>
            <div className='left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-name'>hello !my name is</h2>
                    <h1 className='i-text'>jonh burton</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                        <div className='i-title-item'>front-end developer</div>
                            <div className='i-title-item'>web developer</div>
                            <div className='i-title-item'>UI/UX design</div>
                            <div className='i-title-item'>photographer</div>
                            <div className='i-title-item'>writer</div>
                            <div className='i-title-item'>content creator</div>
                        </div>
                    </div>
                 <p className='i-content'>
                        i design and develop services for customers of all sizzes , specializing in creating stylish , modern websites ,webseries on storis.

                    </p> 
                </div></div>
            <div className='right'></div>
        </div>
    )
}

export default Intro
