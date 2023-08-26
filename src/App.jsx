import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create, { submit } from './pages/Create'
import Profile from './pages/Profile'
import Home, { logIn } from './pages/Home'
import logOut from './components/Nav'
import { createContext, useContext, useState } from 'react'
import Auth from './pages/Auth'

// router and routes

const logInRouter = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={ <RootLayout/> }>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<Create />} action={submit} />
        <Route path="profile" element={<Profile />} />
      </Route> 
  )
)


const logOutRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} action={logIn}/>
      <Route path='*' element={<Home />} />
    </Route>
  )
)


export const UserContext = createContext({
  setUser: () => {},
});

export const useAuth = () => {
  const {user} = useContext(UserContext);
  return user && user.loggedIn;
}




function App() {
  const [user, setUser] = useState({loggedIn: true});

  
  return (
    <>

    <UserContext.Provider value={{ user, setUser }}>
    <RouterProvider router={logInRouter } />
    </UserContext.Provider>
    </>
  )
}

export default App
