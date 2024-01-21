import React from "react";
import Event from './Event'
const h2={
    display:'flex',
    justifyContent:'center',
    background:'cornflowerblue',
}
const ul={
    display:'flex',
    flexWrap:'wrap',
    margin:'-15px',
    listStyle:'none',
    background:'gray',
}
const PageBoard=({events})=>{
    return(
        <div>
        <h2 style={h2}>24th core Worlds Coalition Conference</h2>
        <ul style={ul}>
        {events.map((event,index)=>(
          <Event
            key={index}
            name={event.name}
            location={event.location}
            speaker={event.speaker}
            start={event.time.start}
            end={event.time.end}
          />
        ))}
        </ul>
        </div>
    )
}
export default PageBoard