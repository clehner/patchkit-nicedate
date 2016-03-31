import React from 'react'
import NiceDate from './index'

export default class NiceDateDemo extends React.Component {
  render() {
    return <div>
      <h1>patchkit-nicedate</h1>
      <section className="nicedate">
        <header>&lt;NiceDate ts="..."&gt;</header>
        <div className="content"><NiceDate ts={Date.now()} /></div>
      </section>
      <section className="nicedate-ago">
        <header>&lt;NiceDate ts="..." ago&gt;</header>
        <div className="content"><NiceDate ts={Date.now()} ago /></div>
      </section>
    </div>
  }
}