import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox() {

    let [city, setCity] = useState("");
    const API_KEY = "36afe95ae0d35e2fe3f1a10a92df88ab"

    function handleChange(event) {
        setCity(event.target.value)
    }
    
      
  let getWeather = async()=>{
        let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        let jsonResponce = await responce.json();
        let result = {
             city: city,
             temp : jsonResponce.main.temp,
             feelsLike: jsonResponce.main.feels_like,
             humidity: jsonResponce.main.humidity,
             maxTemp: jsonResponce.main.temp_max,
             minTemp: jsonResponce.main.temp_min,
             weather: jsonResponce.weather[0].description
        }
        // console.log(jsonResponce);
        console.log(result)
     }


    function handleDefault(event) {
        event.preventDefault();
        console.log(city)
        setCity("")
        getWeather();
    }


    return (
        <div className='SearchBox'>

            <form onSubmit={handleDefault}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} />
                <br/><br/> 
                <Button variant="contained" type="submit" >Search </Button>
            </form>
        </div>
    )
}