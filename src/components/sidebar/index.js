import { h, Component } from 'preact'
import style from './style'

export default class Sidebar extends Component {
  render () {
    return (
      <div class={"pane-sm sidebar " + style.sidebar}>
        <div class={style.drag}></div>
      </div>
    )
  }
}
