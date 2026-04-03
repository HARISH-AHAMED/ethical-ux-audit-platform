import { useLocation, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle, 
  AlertTriangle, 
  Shield,
  ArrowRight,
  ExternalLink,
  Info,
  Search
} from 'lucide-react'

// Mock Audit Data
const MOCK_RESULTS = {
  score: 64,
  patterns: [
    {
      id: 1,
      type: 'Forced Sign-Up',
      severity: 'High',
      description: 'The website prevents access to pricing information until a user creates an account.',
      suggestion: 'Allow users to view essential information like pricing and features without prior registration.',
      icon: Shield,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20'
    },
    {
      id: 2,
      type: 'Fake Urgency',
      severity: 'Medium',
      description: 'A countdown timer was detected that resets upon page reload, creating artificial pressure.',
      suggestion: 'Remove artificial countdowns. Use real-time inventory data if urgency is necessary.',
      icon: AlertTriangle,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20'
    },
    {
      id: 3,
      type: 'Nagging Popups',
      severity: 'Low',
      description: 'Frequent newsletter popups appear every 30 seconds, disrupting the browsing experience.',
      suggestion: 'Limit popups to once per session or use a subtle slide-in notification instead.',
      icon: Info,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    }
  ]
}

function Results() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Safe fallback if state is missing (e.g., page refresh)
  const scannedUrl = location.state?.url || 'example.com'

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 duration-700">
      {/* Header / Back Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-300 truncate max-w-[150px] sm:max-w-xs">{scannedUrl}</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="bg-primary-600/10 hover:bg-primary-600/20 text-primary-400 border border-primary-500/20 px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <Search className="w-4 h-4" />
          Scan Another Website
        </button>
      </div>

      {/* Summary Score Card */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield className="w-40 h-40" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Audit Summary</h2>
            <p className="text-slate-400 max-w-md">
              We analyzed the provided URL for ethical UX violations. Our system detected 
              <span className="text-white font-semibold"> {MOCK_RESULTS.patterns.length} dark patterns</span> with varying severity levels.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <div className="bg-red-500/10 text-red-400 px-4 py-2 rounded-xl text-xs font-bold border border-red-500/20">
              1 HIGH SEVERITY
            </div>
            <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-xs font-bold border border-orange-500/20">
              1 MEDIUM SEVERITY
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-slate-800"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={364.4}
                strokeDashoffset={364.4 * (1 - MOCK_RESULTS.score / 100)}
                className="text-primary-500 transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-3xl font-black">{MOCK_RESULTS.score}</span>
          </div>
          <h3 className="mt-6 font-bold text-xl uppercase tracking-wider text-slate-500">Ethical Score</h3>
          <p className="mt-2 text-sm text-green-500 font-medium">Moderate Standing</p>
        </div>
      </div>

      {/* Detailed Issues */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
          <AlertCircle className="w-6 h-6 text-primary-500" />
          Detected Dark Patterns
        </h3>

        {MOCK_RESULTS.patterns.map((pattern) => {
          const Icon = pattern.icon
          return (
            <div 
              key={pattern.id}
              className={`p-1 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group`}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className={`${pattern.bg} ${pattern.color} p-4 rounded-2xl`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-bold">{pattern.type}</h4>
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${pattern.border} ${pattern.color}`}>
                      {pattern.severity}
                    </span>
                  </div>
                
                <p className="text-slate-400 leading-relaxed">
                  {pattern.description}
                </p>

                <div className="pt-4 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Improvement Suggestion</p>
                      <p className="text-sm text-slate-200 mt-1">{pattern.suggestion}</p>
                    </div>
                  </div>
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 group/btn">
                    Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>

      {/* Audit Suggestions Footer */}
      <div className="mt-20 p-10 bg-primary-600/5 border border-primary-500/10 rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Want a full audit report?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          During the hackathon demo, we can show you how our backend will eventually process 
          multiple pages and generate a PDF report for business owners.
        </p>
        <button className="bg-primary-600 hover:bg-primary-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary-500/20 active:scale-95">
          Generate Full Report (Demo)
        </button>
      </div>
    </main>
  )
}

export default Results
