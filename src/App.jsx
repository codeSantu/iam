import React from 'react';
import { Cpu, Terminal, Briefcase, Mail, Linkedin, Download, ExternalLink, Github, Database, Cloud, Layers, Smartphone } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">SANTU<span className="text-sky-400">.DEV</span></span>
          <div className="space-x-8 hidden md:flex text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sky-400 font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Santu Mondal.</h1>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">Senior Backend Developer (Node.js).</h3>
          <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
            I have over 7 years of experience designing and developing scalable, high-performance RESTful APIs and backend systems. 
            Strong expertise in <span className="text-slate-200">Node.js, Express.js, TypeScript, PostgreSQL, MongoDB, Redis caching, AWS deployment, and secure transaction systems.</span> Experienced in real-time application development, wallet and ledger systems, admin management portals, database optimization, and performance tuning.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:pingsantu@gmail.com" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold flex items-center transition-all">
              <Mail className="mr-2 w-5 h-5" /> Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/santu-mondal-347b97210" target="_blank" rel="noreferrer" className="px-6 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500/10 rounded-lg font-semibold flex items-center transition-all">
              <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
            <Cpu className="mr-3 text-sky-400" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all">
              <Terminal className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Languages</h3>
              <p className="text-slate-400 text-sm">JavaScript (ES6+), TypeScript, SQL</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all">
              <Database className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Databases</h3>
              <p className="text-slate-400 text-sm">PostgreSQL, MySQL, MongoDB, Redis (Caching, Pub/Sub)</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all">
              <Cloud className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm">AWS (EC2, RDS, S3, CloudWatch), Docker, CI/CD, Nginx, PM2</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-all">
              <Cpu className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Backend & Concepts</h3>
              <p className="text-slate-400 text-sm">Node.js, Express.js, NestJS, REST APIs, WebSockets, JWT, API Security, RBAC, Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
            <Layers className="mr-3 text-sky-400" /> Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-800/30 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400">Real-Time Betting Portal</h3>
              <p className="text-slate-400 text-sm mb-4">Backend & Admin System</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Built high-concurrency backend handling 5,000+ simultaneous bet requests.</li>
                <li>• Designed wallet and ledger system ensuring transactional consistency.</li>
                <li>• Improved API response time by ~40% using Redis caching and query optimization.</li>
                <li>• Implemented secure RBAC-based admin panel and automated result settlement system.</li>
              </ul>
            </div>
            
            <div className="p-8 bg-slate-800/30 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400">Camio Logistics App</h3>
              <p className="text-slate-400 text-sm mb-4">Backend & Admin Portal</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Developed booking, driver assignment, tracking, and pricing APIs.</li>
                <li>• Reduced database load by ~35% through indexing and caching strategies.</li>
                <li>• Built admin dashboard with analytics, reporting, and user management.</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-800/30 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400">Translangua Interpreter App</h3>
              <p className="text-slate-400 text-sm mb-4">Backend & Admin Management</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Developed secure booking and interpreter assignment workflows.</li>
                <li>• Optimized reporting queries improving performance by ~50%.</li>
                <li>• Implemented JWT authentication and role-based access control.</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-800/30 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400">Teammate App</h3>
              <p className="text-slate-400 text-sm mb-4">Backend & Admin System</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Built team collaboration APIs supporting 1,000+ active teams.</li>
                <li>• Enabled real-time notifications using Redis Pub/Sub.</li>
                <li>• Reduced API error rate by 60% through structured validation and logging.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
            <Briefcase className="mr-3 text-sky-400" /> Professional Experience
          </h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#38bdf8]"></div>
              <h4 className="text-xl font-bold text-white">Technical Lead</h4>
              <p className="text-sky-400 font-medium">Maple Infosolution | Nov 2024 - Present</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-white">Software Developer</h4>
              <p className="text-slate-400 font-medium">Brainium Information Technology | Nov 2022 - Oct 2024</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-white">Node.js Developer</h4>
              <p className="text-slate-400 font-medium">The QA | Jun 2022 - Oct 2022</p>
            </div>
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-white">Software Support Personnel</h4>
              <p className="text-slate-400 font-medium">Kolkata Police | Apr 2018 - Jun 2022</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center bg-[#0f172a] border-t border-slate-800 text-slate-500">
        <p className="text-sm font-medium text-slate-400 mb-2">MCA | Academy of Technology, West Bengal (2018)</p>
        <p className="text-xs text-slate-500">Based in Kolkata, West Bengal, India • Phone: +91 79805 38315</p>
      </footer>
    </div>
  );
};

export default App;