import React from 'react';

const PaintStepsToSuccess = ({stepsToSuccess, onClick}) => {
 return (
     <div className='steps' onClick={onClick}>{stepsToSuccess}</div>

 )

}

export default PaintStepsToSuccess;