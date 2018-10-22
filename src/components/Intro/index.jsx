import React from "react"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"

class Intro extends React.Component {
  render() {
    return (
      <div>
        <p>
          This website is a personal and non-commercial website for the purpose
          of teaching courses at{" "}
          <a href="https://cbs.de/" target="_blank">
            Cologne Business School
          </a>
          . It was written by the awesome project management class of the{" "}
          <strong>2018 MBA</strong>.
        </p>
      </div>
    )
  }
}

export default Intro
