import React from 'react'
//import Img from '../images/about-1.jpg'
import '../components/banner.css'
const About = () => {
    return (
        <div>
            <div className='a'>
                <div className='left'>
                {/* <div className='a-card bg'></div> */}
                    <div className='a-card'>
                        <img src='https://media.istockphoto.com/photos/business-people-discussion-communication-togetherness-concept-picture-id638966200?k=20&m=638966200&s=612x612&w=0&h=smUDAYfrDc3-MU1vSmrMLl095y_eF7frURh4vtjbasQ=' alt='about-img' className='a-img' />
                    </div>
                </div>
                <div className='a-right'>
                    <h1>About us</h1>
                    <p>it is a long established fact that a reader will be distracted by the relabel content .<br />
                        i design and develop services for customers of all sizes , specializing in creating stylish , modern websites ,subseries on story
                        i design and develop services for customers of all sizzle , specializing in creating stylish , modern websites ,Webster's on story</p>
                    <div className='a-award'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCksY8EU4SS_GECZnCV7QcSzWKsQG75hMlVQ&usqp=CAU' alt='award-img'  className='middle-img'/>
                        <div className='a-award-texts'>
                            <h4 className='title'>international design awards 2022</h4>
                            <p>nemo enum ipsum voluptotem queasier aspernature autunite and fugit .</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;
