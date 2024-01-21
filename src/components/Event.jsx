import React from "react";
import PropTypes from 'prop-types'
import {FaUser} from 'react-icons/fa'
import {MdPlace} from 'react-icons/md'
import {BiTime} from 'react-icons/bi'
const li={
    width: 'calc((100% - 30px * 3) / 3)',
    margin: '15px',
    transition: 'box-shadow 250ms linear',
    background:'yellow',
    border: '2px solid cornflowerblue'
}
const Event=({name,start,end,location,speaker})=>{
    return(
        <li style={li}>
            <h2>{name}</h2>
            <div style={{display:'flex',alignItems:'center'}}>
            <MdPlace size={30} color="black"/>
            <p style={{marginLeft:'10px'}}>{location}</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <FaUser size={30} color="black"/>
            <p style={{marginLeft:'10px'}}>{speaker}</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <BiTime size={30} color="black"/>
            <p style={{marginLeft:'10px'}}>{start}</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <BiTime size={30} color="black"/>
            <p style={{marginLeft:'10px'}}>{end}</p>
            </div>
        </li>
    )
}
Event.propTypes = {
    name:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    speaker:PropTypes.string.isRequired,
    start:PropTypes.string.isRequired,
    end:PropTypes.string.isRequired,
}
export default Event