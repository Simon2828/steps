import React, { Component } from 'react'

const StepsToSuccess = (props) => {

        return (
                <li className={`${props.className} loResults`} onClick={props.onClick.bind(this, props.index)}>
                        {props.step}
                        <span style={{marginLeft: "1em"}}>
                        <svg version="1.1" className="tick" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 37 37" height="20" width="20" style={{enableBackground:'new 0 0 37 37'}} xmlSpace="preserve">
                                <path className={`${props.className} circ path`} style={{fill:'none',strokeWidth:3,strokeLinejoin:'round',strokeMiterlimit:10}} d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                                />
                                <polyline className={`${props.className} tick path`} style={{fill:'none',strokeWidth:3,strokeLinejoin:'round',strokeMiterlimit:10}} points="11.6,20 15.9,24.2 26.4,13.8 " />
                        </svg>
                        </span>
                </li>

        )
}



export default StepsToSuccess;