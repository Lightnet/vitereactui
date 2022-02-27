/*
  LICENSE: MIT
  Created by: Lightnet
*/

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ThemeProvider } from './components/theme/ThemeProvider'
import './global.css'

ReactDOM.hydrate(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('app')
)