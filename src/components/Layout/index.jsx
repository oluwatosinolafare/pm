import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
// import "normalize.css"
import "./app.css"
import "./gridlover.css"

import { rhythm, scale } from "../../utils/typography"

import CookieConsent from "react-cookie-consent"

import PageHeader from "../PageHeader"
import PageFooter from "../PageFooter"
import Container from "../Container"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"

library.add(faLink, faProjectDiagram)

let browser = {}
// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const bowser = require("bowser")
  browser = bowser.getParser(window.navigator.userAgent).getBrowser()
} else {
  browser.name = "undefined"
  browser.version = ""
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                date
              }
            }
          }
        `}
      >
        {data => (
          <div>
            <CookieConsent cookieName="pmMba2018NetlifyCom">
              This website uses cookies for administrative purposes and to
              enhance the user experience. By using this website you agree to
              their application.
            </CookieConsent>
            <PageHeader />
            <Container>{children}</Container>
            <PageFooter date={data.site.siteMetadata.date} browser={browser} />
          </div>
        )}
      </StaticQuery>
    )
  }
}

export default Layout
