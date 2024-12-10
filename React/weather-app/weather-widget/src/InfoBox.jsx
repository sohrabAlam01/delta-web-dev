import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function Infobox({info}) {


    return (
        <>
        <div className="info-box ">
       
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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