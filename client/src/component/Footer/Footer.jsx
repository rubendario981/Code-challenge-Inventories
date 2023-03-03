import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-gray-500 py-2 md:py-8 items-center text-white">
      <div className="text-center w-full md:w-4/12 mb-5 md:mb-0">
        <h3 className='font-bold md:text-xl'>Desarrollado por</h3>
        <p className="text-sm">Ruben Dario Guzman</p>
      </div>
      <div className="text-center w-full md:w-8/12 flex justify-around">
        <Link to={"https://github.com/rubendario981"} target="_blank">
          <div className='flex flex-col'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/github-1521500-1288242.png" className='w-8 md:w-12 mx-auto' alt="github icon"/>
              <p className='text-sm md:text-lg'>GitHub</p>
          </div>
        </Link>
        <Link to={"https://wa.link/9h00js"} target="_blank">
          <div>
            <img src="https://secure.webtoolhub.com/static/resources/icons/set111/f6480dc4.png" className='w-8 md:w-12 mx-auto' alt="whatsapp icon"/>
              <p className='text-sm md:text-lg'>WhatsApp</p>
          </div>
        </Link>
        <Link to={"https://www.linkedin.com/in/rdguzmango/"} target="_blank">
          <div>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/linkedin-3506278-2932736.png?f=webp&w=256" className='w-8 md:w-12 mx-auto'  alt="Linkedin icon" />
              <p className='text-sm md:text-lg'>Linkedin</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer