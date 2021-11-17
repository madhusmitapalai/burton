import React from 'react'
import sun from '../images/sun.png'
import moon from '../images/moon-3.jpg'
import {useContext} from 'react'
import { ThemeContext } from '../Context'
import'../components/banner.css'
const Toggle = () => {
     const theme=useContext(ThemeContext)
const handleClick=()=>{
    theme.dispatch({type:'toggle'})
}
    return (
        <div className='toggle'>
            <img   src={sun} alt= 'sun-img' className='sun-img'/>
            <img   src={moon} alt= 'moon-img' className='moon-img'/>
            <div className='t-button' onClick={handleClick} style={{left:theme.state.darkmode? 0 : "30px" }}></div>
        </div>
    )
}

export default Toggle
