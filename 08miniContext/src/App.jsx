
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContexProvider'

function App() {
 

  return (
    <UserContextProvider>
      
     <h1>hello</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
