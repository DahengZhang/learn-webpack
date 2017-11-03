// 与此文件相关的js也被热更新，不添加词段代码，js更改时不会触发热更新
if(module.hot) {
    module.hot.accept();
}

import React from 'react'
import ReactDOM from 'react-dom'

import appCss from '@/style'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
