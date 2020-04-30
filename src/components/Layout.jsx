import React from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import Footer from "./Footer"
import getSeo from "../hooks/useSeo"

const layout = ({ children }) => {
  const seo = getSeo()
  const {
    siteName,
    fallbackSeo: { description, title },
  } = seo

  console.log(seo)
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }

          h1,
          h2,
          h3 {
            margin: 0px;
            line-height: 1.5;
          }

          h1,
          h2 {
            font-family: "Roboto", sans-serif;
          }

          h3 {
            font-family: "PT Sans", sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {children}
      <Footer title={title} />
    </>
  )
}

export default layout
