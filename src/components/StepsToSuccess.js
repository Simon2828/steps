import React, { Component } from 'react'

const StepsToSuccess = (props) => {

        return (
                <li className={`${props.className} loResults`} onClick={props.onClick.bind(this, props.index)}>
                        - {props.step}
                        <svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 37 37" style="enable-background:new 0 0 37 37;" xmlSpace="preserve">
                                <path className="circ path" style="fill:none;stroke:#000;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                                />
                                <polyline className="tick path" style="fill:none;stroke:#000;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" points="11.6,20 15.9,24.2 26.4,13.8 " />
                        </svg>
                </li>

        )
}



export default StepsToSuccess;