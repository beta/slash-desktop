import { h, Component } from 'preact'
import style from './style'

export default class Window extends Component {
  render ({children}) {
    return (
      <div class={"window " + style.window}>
        <div class="window-content">
          {children}
        </div>
      </div>
    )
  }
}
