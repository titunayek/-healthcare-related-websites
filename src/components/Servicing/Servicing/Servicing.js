import React from 'react';
import { useParams } from 'react-router';

const Servicing = () => {
    const {serviceId} = useParams();
    return (
        <div className='bg-success h-100 w-100'>
            <h3>this is servic system : {serviceId}</h3>
        </div>
    );
};

export default Servicing;