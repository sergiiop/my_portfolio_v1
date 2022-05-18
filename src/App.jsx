import './App.css'
import { useRoutes } from './routes'

const App = () => {
  const { Routes } = useRoutes()
  return <Routes />
}

export default App
