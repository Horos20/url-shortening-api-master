import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'

export default function ShortenLink() {
  const [links, setLink] = useState([]);
  async function getShortenedLink() {
    let link = document.getElementById("link").value
    let response = await fetch("https://api.shrtco.de/v2/shorten?url=" + link)
    let data = await response.json();
    if (Boolean(link)) {
      if (data.ok === true) {
        let shortenedLink = data.result.full_short_link
        setLink(links => [...links, [link, shortenedLink]])
      } else {
        return "Enter a valid link"
      }
    } else {
      return "Input field is empty"
    }
  }
  return (
    <>
    <div className='shortenLink'>
        <input id='link' placeholder='Shorten a link here...'></input>
        <Button onClick={getShortenedLink} text={"Shorten It!"} width={"100%"}/>
    </div>
    {links.map((link, key) => {
      return (
        <div key={key} className='links'>
          <p className='fullUrl'>{link[0]}</p>
          <p className='shortenedUrl'>{link[1]}</p>
          <Button text={"Copy"} width={"110px"}/>
        </div>
      )
      })}
    </>
  )
}
