import WeatherDisplay from './components/WeatherDisplay'
import './styles/WeatherDisplay.css'
import './styles/App.css'
import WeatherData from './data/locations.json'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <>

      <div className='app'>
        <h1 className='title'>Weather App</h1>
        <input type="search" className='search-input' onChange={handleSearchChange}></input>
        {WeatherData.map((location) => {
          if(search == location.city.substring(0, search.length).toLowerCase()) return <WeatherDisplay city={location.city} temperature={location.temperature} weather={location.weather}></WeatherDisplay>;
        })}
      </div>

    </>
  )
}

export default App
