import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Location from "./Components/Location";
import Review from "./Components/Review";
import Bottom from "./Components/Bottom";
import Geomap from "./Components/Geomap";

// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// const API_key = `3d016d3bab4c9ac7249e81b1dbbc3eb3`


function App() {
  /*const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData, setResponseData] = useState({})

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })

    /*console.log(`${API_endpoint}
    lat=${latitude}
    &lon=${longitude}
    &exclude={part}
    &appid=${API_key}`)
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
    axios.get(finalAPIEndPoint)
    .then((response) => {
      setResponseData(response.data)
    }) 

  }, [])*/

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() =>{
      localStorage.setItem('current_theme', theme);
    }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Location />
      <Geomap />
      <Review />
      <Bottom />

    </div>
  );
}

export default App;



