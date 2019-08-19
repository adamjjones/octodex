import React, { Component } from 'react'

export class nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <a href="https://octodex.github.com/" className="octodex bold">
            Octodex
          </a>
          <a href="https://octodex.github.com/" className="octodex">
            Home
          </a>
          <a href="https://octodex.github.com/" className="octodex">
            FAQ
          </a>
          <div className="octodex-right">
            <a href="https://twitter.com/githubdesign" className="link">
              Follow us on Twitter
            </a>
            <a href="github.com" className="link">
              Back to GitHub.com
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default nav
