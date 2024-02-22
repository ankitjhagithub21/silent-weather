import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="flex-col space-y-4 text-center">
    <div className="text-xl font-bold">Silent Weather</div>
    <div className="text-5xl font-medium">Page not found</div>
    <div className="text-gray-900">
      Sorry, the page you're looking for isn't available.
    </div>
    <div className="flex items-center justify-center">
      <Link className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer" to={"/"}>
        Visit Homepage
      </Link>
    </div>
  </div>
</div>

  )
}

export default NotFound