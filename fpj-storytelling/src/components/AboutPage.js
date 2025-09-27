import React from 'react';

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-pink-900 to-lime-900 text-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-lime-400 bg-clip-text">About FirstPharmaJob</h1>
      <p className="text-xl mb-8 text-center opacity-90">
        Transforming pharma & life sciences education into meaningful careers through expert guidance and industry connections.
      </p>
      <div className="bg-black/30 rounded-2xl p-8 mb-8 shadow-xl border border-cyan-500/20">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Our Story</h2>
        <p className="mb-4">FirstPharmaJob was founded in January 2025 by industry veterans and educational leaders who witnessed a critical disconnect: brilliant pharma & life sciences graduates struggling to find their place in the industry.</p>
        <p className="mb-4">Our founders, with decades of experience in both pharmaceutical companies and academic institutions, saw graduates with deep scientific knowledge but little understanding of industry pathways.</p>
        <p className="mb-4">We bridge this gap by combining real industry expertise with educational insight, creating clear pathways for pharma & life sciences graduates to launch successful careers.</p>
        <div className="bg-cyan-800/30 rounded-lg p-4 mt-6 text-center border border-lime-500/40">
          <span className="font-bold text-lime-300">💡 Key Insight:</span> Great science education + Industry mentorship = Successful pharma careers
        </div>
      </div>
      <div className="bg-black/20 rounded-2xl p-8 mb-8 shadow-lg border border-pink-500/20">
        <h2 className="text-2xl font-bold mb-4 text-pink-400">Who We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-cyan-700/40 rounded-lg p-4 border border-cyan-500/30">💊<div>Pharmaceutical Graduates</div></div>
          <div className="bg-pink-700/40 rounded-lg p-4 border border-pink-500/30">🧬<div>Biotechnology Students</div></div>
          <div className="bg-lime-700/40 rounded-lg p-4 border border-lime-500/30">🔬<div>Life Sciences Majors</div></div>
          <div className="bg-cyan-700/40 rounded-lg p-4 border border-cyan-500/30">⚕️<div>Healthcare Professionals</div></div>
          <div className="bg-pink-700/40 rounded-lg p-4 border border-pink-500/30">🧪<div>Research Scientists</div></div>
          <div className="bg-lime-700/40 rounded-lg p-4 border border-lime-500/30">📊<div>Regulatory Affairs</div></div>
        </div>
      </div>
      <div className="bg-black/20 rounded-2xl p-8 shadow-lg border border-lime-500/20">
        <h2 className="text-2xl font-bold mb-4 text-lime-400">Our Teaching Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-800/30 rounded-lg p-4 border border-cyan-500/30">
            <span className="text-3xl">🎯</span>
            <h3 className="font-semibold mt-2 mb-1 text-cyan-300">Career-Focused Learning</h3>
            <p>We teach you not just about jobs, but about building meaningful careers in pharma & life sciences where you can make a real impact on human health.</p>
          </div>
          <div className="bg-pink-800/30 rounded-lg p-4 border border-pink-500/30">
            <span className="text-3xl">🌱</span>
            <h3 className="font-semibold mt-2 mb-1 text-pink-300">Growth Mindset</h3>
            <p>Every graduate we guide is on a learning journey. We provide continuous mentorship and professional development throughout your career.</p>
          </div>
          <div className="bg-lime-800/30 rounded-lg p-4 border border-lime-500/30">
            <span className="text-3xl">🤝</span>
            <h3 className="font-semibold mt-2 mb-1 text-lime-300">Industry Connections</h3>
            <p>Our network of industry veterans opens doors and provides insights you can't get in textbooks - real experience from real professionals.</p>
          </div>
          <div className="bg-cyan-800/30 rounded-lg p-4 border border-cyan-500/30">
            <span className="text-3xl">⚡</span>
            <h3 className="font-semibold mt-2 mb-1 text-cyan-300">Innovation Focus</h3>
            <p>We stay ahead of emerging trends in pharmaceuticals, biotechnology, and life sciences to prepare you for tomorrow's opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
