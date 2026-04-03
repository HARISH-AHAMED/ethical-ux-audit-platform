import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Info, ShieldCheck, AlertTriangle } from 'lucide-react'

function Home() {
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  const handleAudit = (e) => {
    e.preventDefault()
    if (!url) return
    // Passing URL state to the results page
    navigate('/results', { state: { url } })
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-700">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
          <Info className="w-4 h-4" />
          <span>Hacksagon 2026 Live Audit Tool</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Expose <span className="text-primary-500">Unethical</span> UX<br />
          in Seconds.
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Our AI-powered platform detects dark patterns, forced sign-ups, and misleading CTAs
          to help you build a more transparent web.
        </p>

        <form onSubmit={handleAudit} className="max-w-3xl mx-auto mt-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl">
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className="w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Enter website URL (e.g., example.com)"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-600 py-3"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-bold transition-all whitespace-nowrap active:scale-95"
              >
                Scan Website
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-500" /> Free for Students
            </span>
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-500" /> Instant Detection
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-500" /> Open Source
            </span>
          </div>
        </form>
      </div>

      {/* Mini Feature Section */}
      <div className="mt-32 grid md:grid-cols-3 gap-8">
        {[
          { title: 'Forced Sign-ups', desc: 'Identifies traps that prevent user access without data.' },
          { title: 'Hidden Costs', desc: 'Detects unexpected charges added at the final step.' },
          { title: 'Fake Urgency', desc: 'Exposes manipulative countdowns and pressure tactics.' },
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-all group cursor-default">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400">{feature.title}</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home
