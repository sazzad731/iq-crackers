
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'

function App() {

  return (
    <div className='overflow-hidden'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
