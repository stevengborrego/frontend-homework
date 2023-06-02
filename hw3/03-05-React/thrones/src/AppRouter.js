import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Houses from "./pages/Houses"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/houses" element={
          <Houses />
        } />
        <Route path="/search" element={
          <Search />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
