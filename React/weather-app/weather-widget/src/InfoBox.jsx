import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import './InfoBox.css'
export default function Infobox({info}) {

    const snow_URL = "https://plus.unsplash.com/premium_photo-1671796731498-03460fa6ddfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     const sun_URL = "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     const rain_URL = "https://images.cnbctv18.com/uploads/2024/07/mumbai-rains-today-4-2024-07-a298622c417e50fa4ba831034cb01a5d.jpg"
     const cold_URL = "https://images.pexels.com/photos/845619/pexels-photo-845619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     const cloud_URL = "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg?w=900"
     const clearSky_URL = "https://s.w-x.co/ugc/styles/980x551/storage-file-default-scheme/2016/03/28/a357ad22-79cd-48fe-9008-c0aba4cb8769.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60"
    return (
        <>
        <div className="info-box ">
       
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.weather.includes("snow")? snow_URL :  info.weather.includes("clouds")? cloud_URL : info.temp > 20 ? sun_URL : info.weather.includes("rain") ? rain_URL : info.temp < 20 ? cold_URL : info.weather.includes("sky") ? clearSky_URL : "" }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.weather.includes("snow")? <SevereColdIcon/> :  info.weather.includes("clouds")? <CloudCircleIcon/> : info.temp > 20 ? <WbSunnyIcon/> : info.weather.includes("rain") ? <ThunderstormIcon/> : info.temp < 20 ? <AcUnitIcon/> : <SolarPowerIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <p>Tempreture: {info.temp}&deg;C</p> 
                       <p>Humidity: {info.humidity}</p>
                       <p>Feels like : {info.feelsLike}</p>
                       <p>Max tempreture: {info.maxTemp}&deg;C</p>
                       <p>Min tempreture: {info.minTemp}&deg;C</p>
                       <p>The Weather can be described as <i> {info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>

            </Card>
        </div>
        </>
    )
}