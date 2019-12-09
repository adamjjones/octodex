import React, { Component } from 'react'
import fire from './images/surfcat.png'
import liberty from './images/octoliberty.png'
import punkcat from './images/daftpunkcat.gif'
import spider from './images/spidercat.png'
import droid from './images/droidcat.png'

const octocats = [
  {
    number: '#145',
    name: 'Fire Fighter Octocat',
    url: fire,
    alt: 'FireFighterOctocat'
  },
  {
    number: '#104',
    name: 'Liberty Octocat',
    url: liberty,
    alt: 'octoliberty'
  },
  {
    number: '#102',
    name: 'DaftPunk Octocat',
    url: punkcat,
    alt: 'DaftPunkOctocat'
  },
  {
    number: '#89',
    name: 'Spider Octocat',
    url: spider,
    alt: 'Spider Octocat'
  },
  {
    number: '#80',
    name: 'Droid Octocat',
    url: droid,
    alt: 'Droid Octocat'
  }
]


class Body extends Component {
  render() {
    return octocats.map(cat => {
      return (
        <div className="body" key={cat.number}>
          <img className="catimages" src={cat.url} alt="Octocats" />
          <a href="{https://octodex.github.com/} + {cat.alt}">
            <p className="name">{cat.name}</p>
          </a>
        </div>
      )
    })
  }
}

export default Body
