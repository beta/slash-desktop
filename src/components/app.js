import { h, Component } from 'preact'

import Window from './window'
import Sidebar from './sidebar'
import Content from './content'

export default class App extends Component {
  render() {
    return (
      <Window>
        <div class="pane-group">
          <Sidebar />
          <Content />
        </div>
      </Window>
    )
  }
}
