import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() =>{
        fetch('experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    } ,[])

    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary'>Ours Experts</h2>

           <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                        ></Expart>)
                }
           </div>
        </div>
    );
};

export default Experts;