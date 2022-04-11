import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <img className='image1' src='/images/robot.png' alt='' />
      <div className='title'>
        <span className='color1'>{`< Hello, `}</span>
        <span className='color2'>
          {window.location.pathname === '/'
            ? 'World />'
            : window.location.pathname.substring(1) + '! />'}
        </span>
      </div>
    </div>
  )
}

export default Home
