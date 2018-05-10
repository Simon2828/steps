import React from 'react';

const PaintStepsToSuccess = ({stepsToSuccess, onClick, index}) => {
 return (
     <div className={`steps brushColor${index}`} onClick={onClick}>{stepsToSuccess}</div>

 )

}

export default PaintStepsToSuccess;