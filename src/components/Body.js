import React, { Component } from 'react'
import sentry from './images/Sentrytocat_octodex.jpg'
import fire from './images/surfcat.png'
import liberty from './images/octoliberty.png'
import punkcat from './images/daftpunkcat.gif'
import spider from './images/spidercat.png'
import droid from './images/droidcat.png'

export class body extends Component {
  render() {
    return (
      <div>
        <img className="catimages" src={sentry} />
        <img className="catimages" src={fire} />
        <img className="catimages" src={liberty} />
        <img className="catimages" src={punkcat} />
        <img className="catimages" src={spider} />
        <img className="catimages" src={droid} />
      </div>
    )
  }
}

export default body
