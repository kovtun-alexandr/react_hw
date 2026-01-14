import { RouterProvider } from 'react-router'
import router from '@/router/router'
import UseProvider from './providers/UseProvider'

function App() {
  return (
    <>
      <UseProvider>
        <RouterProvider router={router} />
      </UseProvider>
    </>
  )
}

export default App
