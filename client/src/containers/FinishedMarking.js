import React from 'react';
import {Link} from 'react-router-dom';

const FinishedMarking = () => {
    return (
        <div>
            <p>Thank you for peer marking!</p>
            <Link to={process.env.PUBLIC_URL + '/'}>Search</Link>
        </div>
    )
}

export default FinishedMarking;