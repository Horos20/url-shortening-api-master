import React from 'react'

export default function Button( {text, width} ) {
  return (
    <button className='button' style={width={width}}>{text}</button>
  )
}
