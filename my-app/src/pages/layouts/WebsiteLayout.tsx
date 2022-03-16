import React from 'react'
import {Outlet} from 'react-router-dom'

type Props = {}

function WebsiteLayout({}: Props) {
  return (
    <div>
        <header>Heder web</header>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout