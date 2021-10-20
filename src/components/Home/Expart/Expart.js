import React from 'react';
import './Expert.css'


const Expart = (props) => {
    const {name , img} = props.expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <img className='img' src={img} alt="" />
            <h3 className='text-primary'>Service Experts : {name}</h3>
        </div>
    );
};

export default Expart;