import { GetUserComponent } from "./components/GetUserComponent"
import { WelcomePage } from "./components/WelcomePage"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  return (
    <>
      {isLoggedIn ? (
        <WelcomePage user={user}
        setIsLoggedIn={setIsLoggedIn}/>
      ) : (
            <GetUserComponent setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}/>
          )}
    </>
  )
}

export default App
