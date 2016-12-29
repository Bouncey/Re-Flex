///////////////////////////////////////////////////////////
// ReflexSplitter
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
import FlexEvents from './reflex-events'
import ReactDOM from 'react-dom'
import React from 'react'

export default class ReflexSplitter
  extends React.Component {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  static propTypes = {
    onStartResize:React.PropTypes.func,
    className: React.PropTypes.string,
    onEndResize:React.PropTypes.func,
    propagate: React.PropTypes.bool,
    onResize:React.PropTypes.func
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  static defaultProps = {
    onStartResize: null,
    onEndResize: null,
    propagate: false,
    onResize:null,
    className: '',
    document
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (props) {

    super (props)

    this.state = {
      active: false
    }

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp   = this.onMouseUp.bind(this)

    this.document = props.document
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  componentDidMount () {

    this.document.addEventListener(
      'mouseup',
      this.onMouseUp)

    this.document.addEventListener(
      'mousemove',
      this.onMouseMove)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  componentWillUnmount () {

    this.document.removeEventListener(
      'mouseup',
      this.onMouseUp)

    this.document.removeEventListener(
      'mousemove',
      this.onMouseMove)
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onMouseMove (event) {

    if (this.state.active) {



      FlexEvents.emit(
        'splitter.resize', {
          splitter: this,
          event
        })

      if (this.props.onResize) {

        this.props.onResize()
      }

      event.stopPropagation()
      event.preventDefault()
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onMouseDown (event) {

    this.setState({
      active: true
    })

    if (this.props.onStartResize) {

      // cancels resize from controller
      // if needed by returning true
      // to onStartResize
      if (this.props.onStartResize(event)) {

        event.stopPropagation()
        event.preventDefault()

        return
      }
    }

    FlexEvents.emit('splitter.startResize', {
      splitter: this,
      event
    })

    event.stopPropagation()
    event.preventDefault()
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onMouseUp (event) {

    if (this.state.active) {

      this.setState({
        active: false
      })

      if (this.props.onStopResize) {

        this.props.onStopResize(event)
      }

      FlexEvents.emit('splitter.stopResize', {
        splitter: this,
        event
      })
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  render () {

    const classNames = [
      ...this.props.className.split(' '),
      'reflex-splitter'
    ]

    return (
      <div className={classNames.join(' ')}
        onMouseDown={this.onMouseDown}>
      </div>
    )
  }
}
