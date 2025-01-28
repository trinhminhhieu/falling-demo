'use client'
import React from 'react'
import Falling from 'falling'
import Navbar from '../../component/navbar'

const CherryBlossom = () => {
  return (
    <div
      className="bg-purple-100"
      style={{
        backgroundImage: 'url("/1344939.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: '#ffff',
      }}
    >
      <Navbar />

      {/* Hiệu ứng rơi */}
      <Falling
        flowerCount={80}
        flowerImage="/cherry.png"
        fallSpeed={-3}
        colors={{ '#fffff': '#fffff' }}
      />
    </div>
  )
}

export default CherryBlossom
