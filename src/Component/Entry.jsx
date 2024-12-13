import React from 'react'

export default function Entry(props) {
  return (
    <article className="journal-entry">
    <img className="japanImg" 
    src={props.img.src} 
    alt={props.img.alt}/>
    <div className="japan-div">
    <span>{props.country}</span>
    <a href={props.googleMapsLink}>View on Google Maps</a>
    <h1>{props.title}</h1>
    <h3>{props.dates}</h3>
    <p>{props.text}</p>
    </div>       </article>
  )
}
