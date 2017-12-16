import React from 'react';
import {Link} from 'react-router-dom';

const LoResults = (props) => {
console.log('result in LoResults', props)
    if (!props.result) {
        return null
    }
    else {
    let Los = props.result.map((learningObj, index) => {
      return <Link to="/steps-to-success" className="loResults" onClick={props.onClick.bind(this,index)}>
      {learningObj.lO}</Link>;
      })
    
      return (
        <div>
          {Los}
        </div>
      )
    }
}

// to return in Los above but onClick undefined...
{/* return <Link to="/steps-to-success" className="loResults" onClick={this.props.onClick.bind(this,index)}>
{learningObj.lO}</Link>; */}

export default LoResults;