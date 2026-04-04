import { useState } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import HistoryPage from './pages/History'
import Compare from './pages/Compare'
import HowItWorks from './pages/HowItWorks'
import { ShieldCheck, History, Scale, Menu, X } from 'lucide-react'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-primary-500/30">
      {/* Premium Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-950/80 to-slate-950 -z-10 pointer-events-none"></div>

      {/* Shared Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <ShieldCheck className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Maverick Audit
              </span>
            </Link>

            {/* Mobile Toggler */}
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`}>Dashboard</Link>
              <Link to="/compare" className={`transition-colors flex items-center gap-1 ${location.pathname === '/compare' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`}>
                <Scale className="w-4 h-4" /> Compare
              </Link>
              <Link to="/history" className={`transition-colors flex items-center gap-1 ${location.pathname.startsWith('/history') ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`}>
                <History className="w-4 h-4" /> History
              </Link>
              <Link to="/how-it-works" className={`transition-colors ${location.pathname === '/how-it-works' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`}>How it works</Link>
            </div>

            <Link to="/" className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary-500/20">
              New Scan
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full left-0 top-16 shadow-2xl">
            <div className="flex flex-col px-6 py-6 space-y-5 font-medium">
              <Link to="/" className={`block transition-colors ${location.pathname === '/' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`} onClick={closeMenu}>Dashboard</Link>
              <Link to="/compare" className={`flex items-center gap-2 transition-colors ${location.pathname === '/compare' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`} onClick={closeMenu}>
                <Scale className="w-5 h-5" /> Compare Websites
              </Link>
              <Link to="/history" className={`flex items-center gap-2 transition-colors ${location.pathname.startsWith('/history') ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`} onClick={closeMenu}>
                <History className="w-5 h-5" /> Past Audits
              </Link>
              <Link to="/how-it-works" className={`block transition-colors ${location.pathname === '/how-it-works' ? 'text-primary-400 font-bold' : 'text-slate-300 hover:text-primary-400'}`} onClick={closeMenu}>How it works</Link>
              
              <div className="pt-4 border-t border-slate-800">
                <Link to="/" className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-lg" onClick={closeMenu}>
                  Start New Scan
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
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
