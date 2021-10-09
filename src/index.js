import React from 'react'
import  ReactDOM  from 'react-dom'

import {Provider} from 'react-redux'
import App from './Component/App'
import store from './Store/store'

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,document.querySelector('#root'))