import "./current-weather.css"
import React from 'react'

const Current_weather = () => {
  return (
    <div className="weather" >
      {/* top */}
      <div className="top">
        <div>
          <p className="city" >mumbai</p>
          <p className="description">sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-iocn" />
      </div>
      {/* bottom */}
      <div className="bottom">
        <p className="temp"> 18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">32°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">20%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current_weather
