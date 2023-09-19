import { useState } from "react"
import { RestrictedPage } from "./components/RestrictedPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = 'Vinicius'


  function Login() {
    setIsLoggedIn(true)
  }

  function Logout() {
    setIsLoggedIn(false)
  }

  return (
    <>
    <RestrictedPage isLoggedIn={isLoggedIn}
     user={user}
     login={Login}
     logout={Logout}/>
    </>
  )
}

export default App
