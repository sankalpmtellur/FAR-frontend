import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Launch from '../src/pages/Launch'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden bg-[#fff7f2]">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_26%)]" />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Launch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
