import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  AlertTriangle, 
  EyeOff, 
  MousePointer2, 
  Search, 
  Scale, 
  FileText, 
  CheckCircle, 
  Cpu, 
  Globe
} from 'lucide-react'

// Common animation variants for scroll-based triggers
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center p-4 bg-primary-500/10 rounded-3xl mb-8 border border-primary-500/20"
        >
          <ShieldCheck className="w-12 h-12 text-primary-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Building a <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">More Ethical</span> Web
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed"
        >
          Discover what Dark Patterns are, how they quietly manipulate user behavior, and how the Maverick app acts as a searchlight for design transparency.
        </motion.p>
      </section>

      {/* 2. The Problem Section */}
      <section className="px-4 py-24 bg-slate-900/50 border-y border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-black tracking-widest uppercase text-red-500 mb-2">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Deceptive by Design</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              "Dark Patterns" are user interfaces carefully crafted to trick or manipulate users into doing things they might not want to do, like signing up for recurring bills or handing over personal data.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Cards */}
            <motion.div variants={fadeUp} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><AlertTriangle className="w-32 h-32" /></div>
              <div className="bg-red-500/10 text-red-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6"><AlertTriangle className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-white mb-3">Fake Urgency</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Artificial countdown timers and "only 1 left in stock" nudges designed to induce panic buying and bypass critical thinking.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><EyeOff className="w-32 h-32" /></div>
              <div className="bg-orange-500/10 text-orange-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6"><EyeOff className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-white mb-3">Hidden Costs</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                When a product appears cheap initially, but unexpected taxes, service fees, or mandatory "care packages" appear at the final checkout step.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><MousePointer2 className="w-32 h-32" /></div>
              <div className="bg-yellow-500/10 text-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6"><MousePointer2 className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-white mb-3">Confirm-shaming</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Manipulative phrasing that attempts to guilt users into opting in (e.g., "No thanks, I don't want to protect my family's data").
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="px-4 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-black tracking-widest uppercase text-primary-500 mb-2">The Solution</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Rule-Based Heuristic Engine</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Maverick Audit uses a deterministic, rule-based scanning engine. When you submit a URL, our backend fetches the raw HTML, then runs it against a curated library of regex keyword patterns and CSS selector rules — each mapped to a specific dark pattern category like Fake Urgency, Hidden Costs, or Confirm-shaming.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Every matched rule carries a weighted penalty. The engine starts with a baseline score of 100 and subtracts penalties based on the number and severity of violations found, producing a transparent and reproducible Ethical Score.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              On top of direct detection, our Industry Heuristic Layer automatically injects known risk patterns for high-risk domains like e-commerce, travel, and social media — even if the scan doesn't catch them in the HTML itself.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-white">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <Cpu className="w-4 h-4 text-primary-500" /> Regex Pattern Matching
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4 text-primary-500" /> Industry-Aware Scoring
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                <Search className="w-4 h-4 text-primary-500" /> CSS Selector Scanning
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">maverick-engine.js</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="text-primary-400">{'>>'} POST /api/scan</div>
                <div className="text-slate-300">target: "https://shop.example.com"</div>
                <div className="text-slate-500">fetching HTML via axios.get...</div>
                <div className="text-slate-500">running 7 rule sets against DOM content...</div>
                <div className="text-amber-400">✗ keyword match: "limited time" → Fake Urgency (penalty: +10)</div>
                <div className="text-amber-400">✗ keyword match: "service fee" → Hidden Costs (penalty: +18)</div>
                <div className="text-red-400">✗ selector match: class="exit-intent" → Nagging UI (penalty: +5)</div>
                <div className="text-slate-500">industry: ecommerce → injecting heuristic: Urgency Pressure (+5)</div>
                <div className="text-green-400 mt-4 border-t border-slate-800 pt-4">baseScore: 88 − penalties: 38 = Score 50/100</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. How to Use Section */}
      <section className="px-4 py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-white mb-4">How to Use Maverick</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Three core tools to help you navigate and enforce honest design.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">1. Single Scan</h4>
              <p className="text-slate-400 text-sm">Paste a URL on the Dashboard. We'll crawl the site instantly, map its severity level, and provide a downloadable PDF report detailing what needs fixing.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">2. Competitor Matchup</h4>
              <p className="text-slate-400 text-sm">Have two vendors? Enter both URLs into our Compare tool. We will perform parallel audits and mathematically declare a winner based on UX transparency.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">3. Historical Records</h4>
              <p className="text-slate-400 text-sm">Access the History tab to review previous compliance checks, completely supported by our instant-load Stale-While-Revalidate caching engine.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Guidelines / Good UX */}
      <section className="px-4 py-24 max-w-4xl mx-auto text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-3xl font-bold text-white mb-10">Ethical UX Guidelines</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white mb-1">Neutral Language</h5>
                <p className="text-xs text-slate-400">Buttons and opt-outs should never use emotional manipulation or guilt to force an action.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white mb-1">Symmetrical Friction</h5>
                <p className="text-xs text-slate-400">It should be exactly as easy to delete an account or cancel a subscription as it is to create one.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white mb-1">Price Transparency</h5>
                <p className="text-xs text-slate-400">All fees, taxes, and subscriptions must be prominently displayed before entering payment details.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white mb-1">Real Consequences</h5>
                <p className="text-xs text-slate-400">If a sale ends in "50 seconds," the offer must actually expire. Artificial urgency is strictly penalized.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default HowItWorks
