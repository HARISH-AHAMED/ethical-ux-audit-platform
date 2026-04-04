import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Info, ShieldCheck, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'


function Home() {
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState('')
  const [loadingMessage, setLoadingMessage] = useState('')
  const navigate = useNavigate()

  const validateUrl = (input) => {
    if (!input) return "Please enter a website URL."
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(input) ? "" : "Please enter a valid URL (e.g., example.com)."
  }

  const handleAudit = async (e) => {
    e.preventDefault()
    const validationError = validateUrl(url)
    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setIsScanning(true)
    
    // Mock sequential loading messages
    setLoadingMessage('Initializing audit engine...')
    const msg1 = setTimeout(() => setLoadingMessage('Analyzing interface patterns...'), 700)
    const msg2 = setTimeout(() => setLoadingMessage('Scanning for deceptive UX signals...'), 1400)
    
    try {
      const response = await fetch('http://localhost:5000/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })

      if (!response.ok) throw new Error('Backend server is not responding correctly.')

      const auditData = await response.json()
      
      // Ensure the user sees the loading messages for at least 2 seconds for the "feel"
      setTimeout(() => {
        navigate('/results', { state: { auditData } })
      }, 2200)

    } catch (err) {
      clearTimeout(msg1)
      clearTimeout(msg2)
      setIsScanning(false)
      setError(err.message || 'Failed to connect to the audit server. Ensure the backend is running.')
    }
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
    >
      {/* Loading Overlay */}
      {isScanning && (
        <div className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-primary-500 rounded-full animate-spin"></div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white animate-pulse">{loadingMessage}</h3>
            <p className="text-slate-400 text-sm">Target: {url}</p>
          </div>
        </div>
      )}

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
            <div className={`absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000 ${error ? 'from-red-500 to-red-700 opacity-40' : ''}`}></div>
            <div className={`relative flex items-center bg-slate-900 border ${error ? 'border-red-500/50' : 'border-slate-800'} rounded-xl p-2 shadow-2xl transition-colors`}>
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className={`w-5 h-5 ${error ? 'text-red-400' : 'text-slate-500'}`} />
                <input
                  type="text"
                  placeholder="Enter website URL (e.g., example.com)"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-600 py-3"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value)
                    if (error) setError('')
                  }}
                />
              </div>
              <button 
                type="submit"
                disabled={isScanning}
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-bold transition-all whitespace-nowrap active:scale-95 disabled:opacity-50"
              >
                Scan Website
              </button>
            </div>
          </div>
          
          {error && (
            <div className="mt-3 text-red-400 text-sm font-medium flex items-center justify-center gap-2 animate-in slide-in-from-top-2">
              <AlertTriangle className="w-4 h-4" /> {error}
            </div>
          )}
          
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
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
        }}
        className="mt-32 grid md:grid-cols-3 gap-8"
      >
        {[
          { title: 'Forced Sign-ups', desc: 'Identifies traps that prevent user access without data.' },
          { title: 'Hidden Costs', desc: 'Detects unexpected charges added at the final step.' },
          { title: 'Fake Urgency', desc: 'Exposes manipulative countdowns and pressure tactics.' },
        ].map((feature, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-all group cursor-default"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400">{feature.title}</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  )
}

export default Home
