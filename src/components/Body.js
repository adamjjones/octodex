import React, { Component } from 'react'
import sentry from './images/Sentrytocat_octodex.jpg'
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
    alt: 'Fire Fighter Octocat'
  },
  {
    number: '#104',
    name: 'Liberty Octocat',
    url: fire,
    alt: 'Liberty Octocat'
  },
  {
    number: '#102',
    name: 'DaftPunk Octocat',
    url: fire,
    alt: 'DaftPunkOctocat'
  },
  {
    number: '#89',
    name: 'Spider Octocat',
    url: fire,
    alt: 'Spider Octocat'
  },
  {
    number: '#80',
    name: 'Droid Octocat',
    url: fire,
    alt: 'Droid Octocat'
  }
]

// class OctoCats extends Component {
//   render() {
//     return (
//       <p>
//         {octocats.map(character => {
//           return (
//             <Octocat
//               number={octocats.number}
//               name={octocats.name}
//               url={octocats.url}
//               alt={octocats.alt}
//             />
//           )
//         })}
//       </p>
//     )
//   }
// }

class body extends Component {
  render() {
    return (
      <div className="body">
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
