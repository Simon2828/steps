import React from 'react';


export default class Writing extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let blob = this.props.location.state.blob
        return (
            <div>
                hi
                <img src={blob}/>
            </div>

        )
    }
}