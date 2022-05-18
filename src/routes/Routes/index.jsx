import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'

const Routes = () => {
  const { useScreen } = useViews()
  const { Home, Resume, Projects } = useScreen()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
