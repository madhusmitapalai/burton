import React from 'react'
//import Data from './Data'
import './banner.css'
const Products = (props) => {
    return (
        <div>
        <div className='card-p'>
                <div className='p-browser'>
                    <div className='p-circles'></div>
                </div>
                <a href={props.link} target='_blank' rel="noreferrer" >
                    <img src={props.img} alt="card-img" className='p-img' />
                </a>
            </div>
        </div>
    )
}
export default Products;
