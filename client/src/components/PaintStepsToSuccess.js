import React from 'react';


let paintbrushes = ['%PUBLIC_URL%/blue-brush.png', '%PUBLIC_URL%/red-brush.png', '%PUBLIC_URL%/green-brush.png', '%PUBLIC_URL%/orange-brush.png', '%PUBLIC_URL%/brown-brush.png', '%PUBLIC_URL%/purple-brush.png']

const PaintStepsToSuccess = ({stepsToSuccess, onClick, index, movePaintbrush, clicked}) => {
 return (
     <div className={`steps photoSteps`} onClick={onClick}>{stepsToSuccess}
     <img className={`clicked${clicked} brushColor${index}`} onClick={movePaintbrush.bind(this, index)} src={paintbrushes[index]} alt='paintbrush'/>
     </div>

 )

}

export default PaintStepsToSuccess;