import React from 'react';
import {Link} from 'react-router-dom';

const LoResults = (props) => {
console.log('result in LoResults', props)
    if (!props.result) {
        return null
    }
    else {
    let Los = props.result.map((learningObj, index) => {
      console.log('in loresults process.env.PUBLICURL',process.env.PUBLIC_URL)
      return <Link to={process.env.PUBLIC_URL + '/steps-to-success'} className="loResults" onClick={props.onClick.bind(this,index)}>
      {learningObj.lO}</Link>;
      })
    
      return (
        <div className="flex-container">
          {Los}
        </div>
      )
    }
}


export default LoResults;