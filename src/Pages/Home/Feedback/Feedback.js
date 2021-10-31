import React, { useEffect, useState } from 'react';
import Latest from '../LatestFeedback/Latest';
import './Feedback.css'

const Feedback = () => {
    const [instructor, setInstructor] = useState([]);
    // data load
    useEffect(() => {
        fetch('https://grisly-skull-03334.herokuapp.com/upcoming')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div className="full-feed">
            <p className="pt-3 top">Testimonial & Review</p>
            <h1 className=" font">What They’re Saying</h1>
            <div className="feedback">
            
            {
                instructor.map(feed=> <Latest
                    key={feed.id}
                    feed={feed}
                    ></Latest>
                )
            }
        </div>
        </div>
    );
};

export default Feedback;