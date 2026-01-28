import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store'
import { Toaster } from 'react-hot-toast'
import Headers from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRouter from './routes/AppRoutes.jsx'


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg'>
         <Headers />
         <main className='flex-grow'>
           <AppRouter />
         </main>
         <Footer />
         <Toaster 
         position="top-right"
         toastOtions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          }
         }}
         />
      </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
