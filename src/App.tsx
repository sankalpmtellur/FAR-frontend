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
      <div className="min-h-screen bg-[#f9fafb]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage issues={getIssues()} />} />
          <Route path="/report" element={<ReportIssuePage onAddIssue={addIssue} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
