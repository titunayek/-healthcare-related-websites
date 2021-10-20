import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id ,name ,img ,description} = props.servic;
    return (
        <div className='services pb-5'>
       
            <img className='img' src={img} alt="" />
            <h3>Service name : {name}</h3>
         
           <Link to={`/booking/${name} ${ description}`}>
           <button className='btn btn-primary'>Detail Services</button>
           </Link>
        </div>
    );
};

export default Service;