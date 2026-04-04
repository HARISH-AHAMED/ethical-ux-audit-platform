import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  History as HistoryIcon, 
  ExternalLink, 
  Calendar, 
  AlertTriangle, 
  ArrowLeft,
  ShieldCheck,
  Search
} from 'lucide-react'

const HistoryPage = () => {
  const [audits, setAudits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/history')
        if (!response.ok) throw new Error('Failed to fetch history')
        const data = await response.json()
        setAudits(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchHistory()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        <p className="mt-4 text-slate-400">Fetching audit records...</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <Link to="/" className="flex items-center text-sm text-slate-400 hover:text-primary-400 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <HistoryIcon className="w-8 h-8 text-primary-500" />
            Audit History
          </h1>
          <p className="text-slate-400 mt-2">Browse and review your previous ethical UX assessments.</p>
        </div>
      </div>

      {error ? (
        <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl text-center text-red-500">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <p>Error: {error}</p>
        </div>
      ) : audits.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 p-16 rounded-[2.5rem] text-center">
          <ShieldCheck className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white">No Audits Yet</h2>
          <p className="text-slate-500 mt-2 mb-8">Scan a website on the home page to start building your history.</p>
          <Link to="/" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all">Start Scanning</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audits.map((audit) => (
            <div key={audit._id} className="bg-slate-900 border border-slate-800 hover:border-primary-500/30 p-6 rounded-3xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    audit.score >= 80 ? 'bg-emerald-500/10 text-emerald-500' :
                    audit.score >= 60 ? 'bg-amber-500/10 text-amber-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {audit.score}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{audit.url.split('//')[1]?.split('/')[0]}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {new Date(audit.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-slate-800 rounded text-slate-400">
                  {audit.patterns.length} Patterns
                </div>
              </div>
              <Link to="/results" state={{ auditData: audit }} className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-2xl text-sm font-semibold transition-all">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryPage
