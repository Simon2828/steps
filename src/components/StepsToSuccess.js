import React, { Component } from 'react'

const StepsToSuccess = (props) => {

        return (
                <li className={props.className} onClick={props.onClick.bind(this,props.index)}>{props.step}</li>

        )
    }



export default StepsToSuccess;