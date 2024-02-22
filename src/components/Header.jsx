import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  
    <header className='lg:fixed relative top-0 w-full'>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <img src="/weather.png" alt="logo" width={50} />
          <span className="ml-3 text-xl">Silent Weather</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to={"/"}>Home</Link>
          <Link className="mr-5 hover:text-gray-900" to={"/explore"}>Explore</Link>
          <Link className="mr-5 hover:text-gray-900" to={"/weather"}>Weather</Link>
         
        </nav>
       
      </div>
    </header>

  )
}

export default Header
