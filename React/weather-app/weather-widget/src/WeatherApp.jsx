import SearchBox from './Search-box'
import Infobox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelsLike: 19.99,
      humidity: 30,
      maxTemp: 21.05,
      minTemp: 21.05,
      temp: 21.05,
      weather: "haze"
  });
 
  function updateInfo(newWeather){

     setWeatherInfo(newWeather);

  }


      return(
        <div>
             <h2>Weather app by Sohrab</h2>
             <SearchBox updateWeater = {updateInfo} />  
             <br /><br />
             <Infobox info = {weatherInfo}/>
        </div>
      )

}