import React from 'react'
import Button from '../components/Button'

export default function ShortenLink() {
  return (
    <div className='shortenLink'>
        <input placeholder='Shorten a link here...'></input>
        <Button text={"Shorten It!"} width={"100%"}/>
    </div>
  )
}
