import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import GlobalStyled from './styled/globalStyled.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <GlobalStyled/>
  </StrictMode>,
)
