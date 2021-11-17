import React from 'react'
import{useRef,useState} from 'react'
import'../components/banner.css'
import phone from '../images/phone.jpg'
import adress from '../images/adress.png'
import email from '../images/email.jpg'
import emailjs from 'emailjs-com';
const Contact = () => {
    const [done, setDone] = useState(false)
    const formref=useRef()
    const hundleSbmit=(e)=>{
    e.preventDefault()
     emailjs.sendForm(
    'service_ciovmx1', 
    'template_v9wnil9',
    formref.current, 
    'user_DJNvGM2CEM6WTHGTa1XO6')
.then((result) => {
    console.log(result.text);
    setDone(true)
}, (error) => {
    console.log(error.text);
});
};
    
    return (
        <div>
<div className='c'>
<div className='c-bg'></div>
<div className='c-wrapper'>
<div className="c-left">
    <h1 className='c-title'> let's discuss your project</h1>
    <div className='c-info'>
        <div className='c-info-item'>
        <img src= {phone} alt="phone-img" className='c-icon' />
        +1 123 455 675
        </div>
        <div className='c-info-item'>
        <img src= {email} alt="phone-img" className='c-icon' />
        contact@lama.dev
        </div>
        <div className='c-info-item'>
        <img src= {adress} alt="phone-img" className='c-icon' />
    250 king street,
        </div>
</div>
</div>
<div className='c-right'>
    
<p className='c-decs'>  <b>what's your story ?</b> it is a long established fact that a reader will be distracted by the relabel content .<br />
i design and develop services for customers of all sizes , specializing in creating stylish , modern websites ,subseries on story
</p>
<form ref={formref} onSubmit={hundleSbmit}>
    <input type='text' placeholder='Name'  name='user_name'/><br/>
    <input type='text' placeholder='subject'  name='user_subject'/><br/>
    <input type='text' placeholder='email'   name='user_email'/><br/>
    <textarea rows='5' cols='10' placeholder='message'   name='meassage'/><br/>
    <button>submit</button> <br/>
    {done && 'thank you'}
</form>
</div>
</div>
</div> 
</div>
    )}

export default Contact;
