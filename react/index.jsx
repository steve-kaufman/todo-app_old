import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form.jsx'
import List from './List.jsx'

const htmlEntryForm = document.getElementById('form')
const htmlEntryList = document.getElementById('list')

ReactDOM.render(<Form />, htmlEntryForm)
ReactDOM.render(<List />, htmlEntryList)
