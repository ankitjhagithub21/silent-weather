import React from 'react'
import Weather from './pages/Weather'
import DefaultWeather from './pages/DefaultWeather'
import "./App.css"
import CurrentLocationWeather from './pages/CurrentLocationWeather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
  
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Weather/>} />
    <Route path='/explore' element={<DefaultWeather/>} />
    <Route path='/weather' element={<CurrentLocationWeather/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
 
 
 
  

  )
}

export default App
