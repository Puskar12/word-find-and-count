import React from 'react'

function ColorScreen({color="white"}) {
  console.log(color)
  return (
    <div className= 'h-80 w-80 mt-5 justify-center' 
    style={{background:color}}> </div>
  )
}

export default ColorScreen