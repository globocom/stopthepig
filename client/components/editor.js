import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: props.initialSource
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(source) {
    this.setState({ source })
  }

  componentDidMount() {
    // this.editor.gotoLine(0, 0, true)
  }

  render() {
    const { source } = this.state

    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        ref={ref => this.editor = ref}
        onChange={this.onChange}
        fontSize={14}
        showPrintMargin={false}
        showGutter
        highlightActiveLine
        value={source}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    )
  }
}

Editor.propTypes = {
  initialSource: PropTypes.string
}

Editor.defaultProps = {
  initialSource: ''
}

export default Editor
