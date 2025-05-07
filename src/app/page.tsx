"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-700">Shyam Chawai</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-indigo-700 font-medium">About</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-700 font-medium">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-2 px-4 pb-4">
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-700 font-medium">About</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-700 font-medium">Experience</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section with Banner Image */}
      <section className="relative h-96 md:h-screen max-h-[700px]">
        {/* This is where your first image would go - banner/hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900">
          {/* Replace this with your actual image */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/60 z-10"></div>
          <img 
            src="/image1.jpg" 
            alt="Shyam Chawai" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shyam Chawai</h1>
          <h2 className="text-xl md:text-3xl font-light mb-6">Regional Head – Madhesh Province</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            A dedicated banker and strategic leader with over 9 years of experience in Nepal's evolving financial sector.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors text-white font-medium">
              About Me
            </a>
            <a href="#contact" className="px-6 py-3 bg-white hover:bg-gray-100 rounded-full transition-colors text-purple-900 font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image2.jpg"
                  alt="Shyam Chawai"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
              <div className="prose text-gray-700 max-w-none">
                <p className="mb-4">
                  Welcome to my professional space. I'm Shyam Chawai, a dedicated banker and strategic leader with over 9 years of experience in Nepal's evolving financial sector. I currently serve as the Regional Head of Madhesh Province at Kamana Sewa Bikas Bank Ltd., where I oversee branch operations, business growth, credit mobilization, and staff development across one of Nepal's most dynamic regions.
                </p>
                <p>
                  My journey in banking has spanned frontline roles, branch leadership, and regional strategy — focusing on inclusive finance, SME empowerment, and sustainable operational performance.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Strategic Leadership</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Financial Management</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Team Development</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Business Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-16 flex items-center justify-center">
            Professional Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            
            {/* Kamana Sewa Bikas Bank */}
            <div className="mb-16 md:mb-0 relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Kamana Sewa Bikas Bank Ltd.</h3>
                <p className="text-purple-700 font-medium mb-1">Regional Head – Madhesh Province</p>
                <p className="text-gray-600 mb-3">2020–Present</p>
                <p className="text-gray-600 mb-2">Previously: Regional Support – Narayanghat | Branch Manager – Kawasoti</p>
                <ul className="list-disc pl-5 md:pl-0 md:list-none space-y-1 text-gray-700">
                  <li className="md:text-right">Lead provincial operations with a focus on credit, recovery, compliance, and profitability.</li>
                  <li className="md:text-right">Mentor and support Branch Managers to achieve business objectives.</li>
                  <li className="md:text-right">Conduct regular branch reviews, business planning, and performance evaluations.</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Deva Bikas Bank */}
            <div className="mb-16 md:mb-0 relative flex flex-col md:flex-row items-center md:mt-24">
              <div className="md:w-1/2 md:pl-12 order-2">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Deva Bikas Bank Ltd.</h3>
                <p className="text-purple-700 font-medium mb-1">Branch Manager</p>
                <p className="text-gray-600 mb-3">2019–2020</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Led branch-level business planning and staff coordination.</li>
                  <li>Spearheaded deposit growth and customer relationship enhancement.</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-end md:justify-center order-1 md:order-1 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Garima Bikas Bank */}
            <div className="relative flex flex-col md:flex-row items-center md:mt-24">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Garima Bikas Bank Ltd.</h3>
                <p className="text-purple-700 font-medium mb-1">Relationship Manager | Junior Officer | Management Trainee</p>
                <p className="text-gray-600 mb-3">2017–2019</p>
                <ul className="list-disc pl-5 md:pl-0 md:list-none space-y-1 text-gray-700">
                  <li className="md:text-right">Specialized in credit appraisal, client relationship management, and marketing.</li>
                  <li className="md:text-right">Played a critical role in portfolio growth and service delivery.</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16"> Leadership & Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">Branch Transformation</h3>
              <p className="text-gray-700">Successfully turned underperforming branches into high-growth units through strategic leadership.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">Career Advancement</h3>
              <p className="text-gray-700">Rapid progression from Branch Manager to Province Head due to strong performance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">Strategic Leadership</h3>
              <p className="text-gray-700">Known for strategic thinking, people management, and crisis resolution skills.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">Team Development</h3>
              <p className="text-gray-700">Key contributor in mentoring and building high-performing teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Social <span className='text-purple-700'>Impact</span></h2>
              <div className="prose text-gray-700 max-w-none">
                <ul className="list-disc pl-5 space-y-4 text-lg">
                  <li>Former President – Kawsoti Saving & Credit Cooperative Ltd.</li>
                  <li>Former Coordinator – Internal Audit Committee, Madhyabindu Multiple Campus</li>
                  <li>Active Member – Rotary International championing education and health causes</li>
                  <li>Participated in several international Rotary conventions</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative max-h-[900px]  rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image3.jpg"
                  alt="Community Involvement"
                  width={700}
                  height={250}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image1.jpg"
                  alt="Family"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Personal Life</h2>
              <div className="prose text-gray-700 max-w-none">
                <p className="mb-4">
                  I live in Kawasoti-08, Nawalparasi, with my wife Nisha Bhusal and our two wonderful children, Shreeyansi Subedi and Sirjan Subedi. I value a life balanced between professional achievement, community service, and family happiness.
                </p>
                <p className="mb-6">
                  I enjoy travel, cultural exchange, and staying connected with social development efforts.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-semibold text-indigo-800 mb-2">International Exposure</h4>
                  <p>Thailand | Malaysia | Singapore | Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">📫 Connect With Me</h2>
          
          <div className="max-w-md mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-800 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-200">Email</p>
                <a href="mailto:shyam.chawai@gmail.com" className="hover:underline">shyam.chawai@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-indigo-800 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-200">Phone/WhatsApp/Viber</p>
                <a href="tel:+9779857040299" className="hover:underline">+977-9857040299</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-indigo-800 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-200">LinkedIn</p>
                <a href="https://linkedin.com/in/shyamchawai9" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/shyamchawai9</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-950 text-indigo-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Shyam Chawai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}