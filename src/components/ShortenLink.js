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
        setLink(links => [...links, shortenedLink])
      } else {
        return "Enter a valid link"
      }
    } else {
      return "Input field is empty"
    }
  }
  return (
    <div className='shortenLink'>
        <input id='link' placeholder='Shorten a link here...'></input>
        <Button onClick={getShortenedLink} text={"Shorten It!"} width={"100%"}/>
    </div>
  )
}
