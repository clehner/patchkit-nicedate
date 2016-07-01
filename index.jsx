import React from 'react'
import * as u from 'patchkit-util'

export default class NiceDate extends React.Component {
  render() {
    return <span>{u.niceDate(this.props.ts, this.props.ago, this.props.locale)}</span>
  }
}