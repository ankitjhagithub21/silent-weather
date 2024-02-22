import React from 'react'
import Weather from './pages/Weather'
import CurrentLocationWeather from './pages/CurrentLocationWeather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CitiesWeather from './pages/CitiesWeather'
import "./App.css"
import NotFound from './pages/NotFound'

const App = () => {
  return (
  
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Weather/>} />
    <Route path='/explore' element={<CitiesWeather/>} />
    <Route path='/weather' element={<CurrentLocationWeather/>} />
    <Route path='/*' element={<NotFound/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
 
 
 
  

  )
}

export default App
