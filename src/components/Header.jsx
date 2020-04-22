import React from 'react'
import {css} from '@emotion/core'

import '../styles/Header.css'

const Header = () => {
  return (
    <header
      css={css`
        h1 {
        }
      `}
    >
      <div className="header">
        <h1>Hotel Gatsby</h1>
      </div>
    </header>
  )
}

export default Header
