'use client'
import React from 'react'
import Falling from 'falling'
import Navbar from '../component/navbar'
const FallingDemo = () => {
  return (
    <div
      className="bg-purple-100"
      style={{
        backgroundImage: "url('/tet.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <Falling
        flowerCount={50}
        flowerImage="/flow.png"
        fallSpeed={-3}
        colors={{ '#fffff': '#fffff' }}
      />
    </div>
  )
}

export default FallingDemo
