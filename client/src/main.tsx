import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from  "react-router-dom"
import Index from './Routes/Allroutes'
import GlobalStyles from './assets/Globalstyles'
import { GlobalProvider } from './Services/GlobalContent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <GlobalProvider>
          <GlobalStyles  />
          < RouterProvider  router  = {Index}  />
       </GlobalProvider>
  </React.StrictMode>,
)
