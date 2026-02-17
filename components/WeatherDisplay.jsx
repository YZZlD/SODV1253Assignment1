import '../styles/WeatherDisplay.css';

export default function WeatherDisplay(props) {

    //Grab props and generate weather display with data
    return (
        <>
            <div className='weather-display'>
                <h1 className='city'>{props.city}</h1>
                <p className='weather-info'>{props.temperature}</p>
                <p className='weather-info'>{props.weather}</p>
            </div>
        </>
    )
}
