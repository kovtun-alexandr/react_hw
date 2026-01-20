import { Provider, useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router'
import router from './routes/routes'
import { store } from './redux/store'
import { useEffect } from 'react'
import { setUser } from './redux/slices/user/slice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser({ userName: "Oleksandr", role: "admin" }))
  }, [dispatch])

  return (<RouterProvider router={router} />)
}

export default App
