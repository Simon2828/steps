import React from 'react';
import blueBrush from './img/blue-brush.png';
import redBrush from './img/red-brush.png';
import greenBrush from './img/green-brush.png';
import orangeBrush from './img/orange-brush.png';
import brownBrush from './img/brown-brush.png';
import purpleBrush from './img/purple-brush.png';


let paintbrushes = [redBrush, greenBrush, blueBrush, orangeBrush, brownBrush, purpleBrush]

const PaintStepsToSuccess = ({stepsToSuccess, onClick, index, movePaintbrush, clicked}) => {
 return (
     <div className={`steps photoSteps`} onClick={onClick}>{stepsToSuccess}
     <img className={`clicked${clicked} brushColor${index}`} onClick={movePaintbrush.bind(this, index)} src={paintbrushes[index]} alt='paintbrush'/>
     </div>

 )

}

export default PaintStepsToSuccess;