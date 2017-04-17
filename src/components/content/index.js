import { h, Component } from 'preact'
import style from './style'

export default class Content extends Component {
  render () {
    return (
      <div class={"pane " + style.content}>
      </div>
    )
  }
}
