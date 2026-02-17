import WeatherDisplay from './components/WeatherDisplay'
import './styles/WeatherDisplay.css'
import './styles/App.css'
import WeatherData from './data/locations.json'
import { useState } from 'react'

function App() {
  //Search variable state for dynamically showing city weather information
  const [search, setSearch] = useState('');


  //Grab the search bar value from the search bar input element
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <>
      <div className='app'>
        <h1 className='title'>Weather App</h1>
        {/* Set state through function when search bar is changed */}
        <input type="search" className='search-input' onChange={handleSearchChange}></input>
        {/*
          Map all locations to weather display card components and display
          Grab first part of the city name and check against the current search string to only dynamically show searched for elements.
        */}
        {WeatherData.map((location) => {
          if(search == location.city.substring(0, search.length).toLowerCase()) return <WeatherDisplay key={location.city} city={location.city} temperature={location.temperature} weather={location.weather}></WeatherDisplay>;
        })}
      </div>
    </>
  )
}

export default App
