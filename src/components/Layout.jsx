import React from 'react'
import Header from './Header'

const layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default layout
