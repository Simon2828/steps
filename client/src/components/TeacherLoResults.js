import React from 'react';
import {Link} from 'react-router-dom';

// below line for putting two functions on onClick, but not working...
//       return <Link to={process.env.PUBLIC_URL + '/teacher/steps-to-success'} className="loResults" onClick={(event) => {props.onClick.bind(this,index); props.onClick.bind(this, props.lOsAndStepsReducer);}}>


const TeacherLoResults = (props) => {
    if (!props.result) {
        return null
    }
    else {
    let Los = props.result.map((learningObj, orderOfResultsIndex) => {
      return <Link to={process.env.PUBLIC_URL + '/teacher/steps-to-success'} className="loResults" onClick={props.onClick.bind(this,learningObj.index, orderOfResultsIndex)}>
      {learningObj.lO}</Link>;
      })
    
      return (
        <div className="flex-container">
          {Los}
        </div>
      )
    }
}


export default TeacherLoResults;