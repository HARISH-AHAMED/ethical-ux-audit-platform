import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import HistoryPage from './pages/History'
import { ShieldCheck, History } from 'lucide-react'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Shared Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Maverick Audit
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
                <Link to="/" className="hover:text-primary-400 transition-colors">Dashboard</Link>
                <Link to="/history" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <History className="w-4 h-4" /> History
                </Link>
                <a href="#" className="hover:text-primary-400 transition-colors">How it works</a>
              </div>
            </div>
            <Link to="/" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary-500/20">
              New Scan
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>

      {/* Shared Footer */}
      <footer className="border-t border-slate-900 py-10 text-center">
        <p className="text-slate-600 text-sm">
          Built with ❤️ by Team <span className="text-slate-400 font-semibold">Maverick</span> for Hacksagon 2026
        </p>
      </footer>
    </div>
  )
}

export default App
