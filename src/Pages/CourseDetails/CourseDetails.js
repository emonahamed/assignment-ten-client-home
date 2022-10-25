import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const [courseDetails, SetCourseDetails] = useState([]);


    useEffect(() => {
        fetch('https://developer-bee-server-7i9rd3x6t-emonahamed.vercel.app/courses')
            .then(res => res.json())
            .then(data => SetCourseDetails(data))
    }, [])

    console.log(courseDetails);



    const details = courseDetails.find(n => n._id === id)

    console.log(details);





    return (
        <div>
            <h2> </h2>
        </div>
    );
};

export default CourseDetails;