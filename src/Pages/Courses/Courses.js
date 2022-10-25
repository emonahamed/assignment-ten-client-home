import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
    })




    return (
        <div>

            <p>this is courses</p>
        </div>
    );
};

export default Courses;