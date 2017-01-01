![re-flex](./resources/img/re-f%7Cex-banner.png)

# About Re-F|ex

Re-F|ex is a flex-based React layout component library which I created because none of the components I found out there could satisfy my requirements.

It intends to be powerful and address the needs of advanced React Web applications that require resizable layouts

Here is a basic demo:

```js
import ReactDOM from 'react-dom'
import React from 'react'

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 're-flex'

import './demo.scss'


class ReflexBasicDemo extends React.Component {

  /////////////////////////////////////////////////////////
  // Basic vertical re-flex layout non-resizable
  //
  /////////////////////////////////////////////////////////
  render () {

    return (
      <ReflexContainer orientation="vertical">

        <ReflexElement className="left-pane">
          <div className="pane-content">
            Left Pane (fixed)
          </div>
        </ReflexElement>

        <ReflexElement className="right-pane">
          <div className="pane-content">
            Right Pane (fixed)
          </div>
        </ReflexElement>

      </ReflexContainer>
    )
  }
}

ReactDOM.render(
  <ReflexBasicDemo/>,
  document.getElementById('demo-basic'))
```

## Installation

* npm install react-reflex

## Documentation & Samples

Re-F|ex is the most powerful React library out there ... Don't just trust me, try it!

[Click here for code samples and live demos ...](https://leefsmp.github.io/Re-Flex/index.html)

## Development

* Development server `npm start`
* Run tests: `npm test`
* Continuously run tests on file changes `npm run watch-test`
* Build `npm run build-lib` | 'npm run build-lib-dev' (dev mode non-minified with source-map)
* Build demo `npm run build-demo` | 'npm run build-demo-dev' (dev mode non-minified with source-map + watch)
