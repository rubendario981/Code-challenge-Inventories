import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-gray-500 py-4 md:py-12 items-center text-white">
      <div className="text-center w-full md:w-4/12 mb-8 md:mb-0">
        <h3 className='font-semmibold text-2xl'>Desarrollado por</h3>
        <p className="text-lg">Ruben Dario Guzman</p>
      </div>
      <div className="text-center w-full md:w-8/12 flex justify-around">
        <Link to={"https://github.com/rubendario981"} target="_blank">
          <div className='flex flex-col'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/github-1521500-1288242.png" className='w-12 md:w-20 mx-auto' alt="github icon"/>
              <p>GitHub</p>
          </div>
        </Link>
        <Link to={"https://wa.link/9h00js"} target="_blank">
          <div>
            <img src="https://secure.webtoolhub.com/static/resources/icons/set111/f6480dc4.png" className='w-12 md:w-20 mx-auto' alt="whatsapp icon"/>
              <p>WhatsApp</p>
          </div>
        </Link>
        <Link to={"https://www.linkedin.com/in/rdguzmango/"} target="_blank">
          <div>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/linkedin-3506278-2932736.png?f=webp&w=256" className='w-12 md:w-20 mx-auto'  alt="Linkedin icon" />
              <p>Linkedin</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer