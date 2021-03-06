import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrack } from '../actions/track'
import styles from './Track.css'

import TrackCardDetail from '../components/TrackCardDetail'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Track extends Component {

  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount () {
    this.fetch(this.props.params.id)
  }

  fetch (id) {
    this.props.dispatch(fetchTrack(id))
  }

  render () {
    const { track } = this.props
    let trackCard = null

    if(track === undefined || !Object.keys(track).length ){
      /* not loaded yet... */
    } else {
      /* loaded... */
      trackCard = (
        <TrackCardDetail {...track} />
      )
    }

    return (
      <ReactCSSTransitionGroup
        className={styles.track}
        component='div'
        transitionName='example'
        transitionAppear={true} >
          { trackCard }
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    track: state.trackz.track,
  }
}

export default connect(mapStateToProps)(Track)
