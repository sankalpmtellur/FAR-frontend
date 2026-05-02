import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { useIssues } from './hooks/useIssues'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ReportIssuePage } from './pages/ReportIssuePage'

function App() {
  const { addIssue, getIssues } = useIssues()

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden bg-[#f9fafb]">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.10),transparent_24%)]" />
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage issues={getIssues()} />} />
            <Route path="/report" element={<ReportIssuePage onAddIssue={addIssue} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
