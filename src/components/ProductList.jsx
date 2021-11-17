import React from 'react'
import Products from './Products';
import Data from '../components/Data';
import './banner.css'
const ProductList = () => {
    return (
        <div>
            <div className='pl'>
                <div className='pl-texts'>
                    <h1 className='pl-title'>
                        create & inspire.it's lama
                    </h1>
                    <p className='pl-desc'>lama is a creative portfolios that your work has been  waiting beautiful homes , stunning portfolio styles & a wrote lot  more inside.</p>
                </div>
                <div className='pl-list'>
                    {Data.map((item) => {
                        return(
                        <Products img={item.img} key={item.id} link={item.link} />) 
                    })}



                </div>
            </div>
        </div>
    )
}
export default ProductList ;