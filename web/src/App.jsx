import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ListPage from "./pages/ListPage"
import DetailPage from "./pages/DetailPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/jobs" />}
        />

        <Route
          path="/jobs"
          element={<ListPage />}
        />

        <Route
          path="/jobs/:id"
          element={<DetailPage />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App