import React from 'react'

export default function Button( {text, width, onClick} ) {
  return (
    <button onClick={onClick} className='button' style={width={width}}>{text}</button>
  )
}
