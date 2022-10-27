import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    console.log(user.displayName)


    const { id } = useParams();


    const details = useLoaderData();
    console.log(details)

    const Eachdetails = details.find(n => n._id === id);
    console.log(Eachdetails)



    return (
        <div>
            <h3>Checkout</h3>
            <p><span className='text-danger'>Purchased By</span> :{user.displayName} </p>
            <h6>Course Name : {Eachdetails.author.name}</h6>
            <h6>Course Price : 500 Taka</h6><br />
            <h5 className='text-success'>Thnx for purchasing this course</h5>

        </div>
    );
};

export default CheckOut;