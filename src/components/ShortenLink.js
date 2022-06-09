import React from 'react'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

export default function ShortenLink() {
  const [links, setLink] = useState([]);

  /*   Get links from localStorage    */
  useEffect(() => {
    let allLinks = JSON.parse(localStorage.getItem('savedLinks'))
    if(allLinks === null) allLinks = [];
    for (let i = 0; i < allLinks.length; i++) {
      const link = Object.keys(allLinks[i]).toString();
      const shortenedLink = Object.values(allLinks[i]).toString();
      setLink(links => [...links, [link, shortenedLink]])
    }
  }, []);

  async function getShortenedLink() {
    let link = document.getElementById("link").value
    let response = await fetch("https://api.shrtco.de/v2/shorten?url=" + link)
    let data = await response.json();
    if (Boolean(link)) {
      if (data.ok === true) {
        let shortenedLink = data.result.full_short_link
        setLink(links => [...links, [link, shortenedLink]])

        /*   Save new link to localstorage   */
        let allLinks = JSON.parse(localStorage.getItem('savedLinks'))
        if(allLinks === null) allLinks = [];
        const updatedLinks = allLinks.concat({[link]: shortenedLink})
        localStorage.setItem('savedLinks', JSON.stringify(updatedLinks))

      } else {
        return "Enter a valid link"
      }
    } else {
      return "Input field is empty"
    }
  }
  function copyToClipboard(key) {
    let copyText = document.getElementById(key);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    let copiedButton = document.getElementsByClassName('copiedButton');
    if (copiedButton.length > 0) {
      copiedButton[0].innerHTML = "Copy";
      copiedButton[0].classList.remove('copiedButton');
    }
    copyText.parentElement.getElementsByTagName('button')[0].innerHTML = "Copied!";
    copyText.parentElement.getElementsByTagName('button')[0].classList.add('copiedButton');
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
          <input id={key} className='shortenedUrl' defaultValue={link[1]} readOnly="readonly"></input>
          <Button text={"Copy"} width={"110px"} onClick={() => copyToClipboard(key)}/>
        </div>
      )
      })}
    </>
  )
}
