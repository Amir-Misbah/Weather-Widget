import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelsLike: 33.73,
            humidity: 89,
            temp: 28.05,
            tempMax: 28.05,
            tempMin: 28.05,
            weather: "mist",
        }
    );
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}