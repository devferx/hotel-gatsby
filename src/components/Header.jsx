import React from 'react'
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import Nav from './Nav'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration:none;
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 1rem;
      `}
    >
      <div
        css={
          css`
            max-width: 1200px;
            margin: 0 auto;

            @media screen and (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `
        }>
        <EnlaceHome><h1>Hotel Gatsby</h1></EnlaceHome>
        <Nav/>
      </div>
    </header>
  )
}

export default Header
