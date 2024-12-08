import React from 'react'

export default function Navbar() {
  return (
    <div className="container flex justify-around fixed bottom-0 align-center">
        <a href="/">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-bars"></i>
          </div>
        </a>
        <a href="/event">
          <div className="m-2 p-2 border-2 border-black rounded-xl">
            <i className="text-4xl fa-solid fa-champagne-glasses"></i>
          </div>
        </a>
        <a href="/profile">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-user"></i>
          </div>
        </a>
    </div>
  )
}
