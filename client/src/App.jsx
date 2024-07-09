import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/share/Home'
import Register from './pages/share/Register'
import Login from './pages/share/Login'
import Account from './pages/Account'
import UserNavbar from './components/UserNavbar'
import AdminNavbar from './components/AdminNavbar'
import Dashboard from './pages/admin/Dashboard'
import Protected from './pages/share/Protected'
import Visit from './pages/share/Visit'
import AdminProtected from './pages/share/AdminProtected'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/visit' element={<Visit />} />
        <Route path='/user' element={<> <Protected compo={<><UserNavbar /> <Outlet /> </>} />   </>}>
          <Route index element={<Account />} />
        </Route>

        <Route path='/admin' element={ <AdminProtected compo={<><AdminNavbar /> <Outlet /></>}  />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/' element={<Register />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App