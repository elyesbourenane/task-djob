import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import Album from "./components/Album"

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId/" element={<UserProfile />} />
        <Route path="/albums/:albumId/" element={<Album />} />
      </Routes>
    </Router>

    </div>
  )
}

export default App