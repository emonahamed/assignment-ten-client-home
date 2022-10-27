import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const details = useLoaderData();
    console.log(details)



    return (
        <div>
            <p>This is checkout page</p>
        </div>
    );
};

export default CheckOut;