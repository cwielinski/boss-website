import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Check, ArrowRight, Circle, Building2, Hammer, Sparkles, Package } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logo from '/assets/logo.png';
import builderSetupScreen from '/assets/builder-setup-screen.png';
import loginScreen from '/assets/login-screen.png';
import jobsScreen from '/assets/jobs-screen.png';
import neighborhoodsScreen from '/assets/neighborhoods-screen.png';
import flooringCatalogScreen from '/assets/flooring-catalog-screen.png';
import appointmentsScreen from '/assets/appointments-screen.png';
import bossDiagram from '/assets/boss-diagram.png';
import editFlooringProductScreen from '/assets/edit-flooring-product-screen.png';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("https://formspree.io/f/mpqwrwko", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Network error. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src={logo} alt="BOSS" className="h-8 w-auto" />
            </div>
            <Button className="bg-[#5BB75B] hover:bg-[#4FA84F] text-white">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                Builder Options Selection System
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-4">
                One platform connecting builders, flooring companies, vendors, and design centers.
              </p>
              <p className="text-lg text-gray-500 mb-12">
                BOSS centralizes the entire home options and design process. From catalogs and pricing to appointments and selections, everything lives in one system built for accountability, speed, and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#5BB75B] hover:bg-[#4FA84F] text-white px-8 py-6 text-lg"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-gray-300"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            
            {/* Right - Computer Screen Mockup */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="relative" style={{ perspective: '1000px' }}>
                  <div 
                    className="relative bg-gray-800 rounded-t-2xl p-3 shadow-2xl"
                    style={{ transform: 'rotateY(-5deg) rotateX(5deg)' }}
                  >
                    {/* Screen Bezel */}
                    <div className="bg-black rounded-lg p-1">
                      {/* Screen Content */}
                      <div className="relative rounded overflow-hidden bg-white">
                        <img 
                          src={loginScreen}
                          alt="BOSS Platform Dashboard"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Bottom Laptop Base */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-2 bg-gray-700 rounded-b-2xl"></div>
                  </div>
                  
                  {/* Laptop Base/Keyboard */}
                  <div 
                    className="relative mx-auto w-[110%] h-3 bg-gray-300 rounded-b-lg shadow-lg"
                    style={{ transform: 'translateZ(-20px)' }}
                  ></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5BB75B]/20 to-[#4FA84F]/20 blur-3xl -z-10 scale-90"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Industry Context */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
              Built for the modern homebuilding ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The home design and options process is fragmented. Builders, flooring companies, vendors, and showrooms all operate in separate systems, spreadsheets, emails, and calendars. BOSS was created to unify these workflows into a single source of truth.
            </p>
          </div>
          
          {/* Ecosystem Diagram */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Home Builders', Icon: Building2 },
                { title: 'Flooring Companies', Icon: Hammer },
                { title: 'Design Centers & Showrooms', Icon: Sparkles },
                { title: 'Vendors & Trades', Icon: Package }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#5BB75B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#5BB75B] transition-colors">
                      <item.Icon className="w-8 h-8 text-[#5BB75B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="bg-[#5BB75B] text-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                <span className="font-bold text-xl">BOSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BOSS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-8 text-center">
              What is BOSS?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              BOSS is a unified platform that manages the full lifecycle of builder options selection. It connects flooring companies to builders and design centers, while also linking builders to vendors and customers. Every role works inside the same system, with shared data, real-time updates, and built-in accountability.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                'One platform instead of spreadsheets, emails, and disconnected tools',
                'Real-time visibility for every stakeholder',
                'Designed specifically for high-volume builders and design centers'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB75B] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5BB75B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5BB75B]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 text-center">
            The problems slowing builders and design centers down
          </h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            BOSS replaces all of this with a single, structured workflow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Duplicate data entry',
                description: 'across teams and systems'
              },
              { 
                title: 'Pricing errors',
                description: 'caused by outdated catalogs and spreadsheets'
              },
              { 
                title: 'Missed appointments',
                description: 'and delayed scheduling'
              },
              { 
                title: 'Limited visibility',
                description: 'into selections, quotes, and approvals'
              },
              { 
                title: 'Manual processes',
                description: 'that don\'t scale with volume'
              },
              { 
                title: 'Disconnected systems',
                description: 'creating communication gaps'
              }
            ].map((problem, idx) => (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-[#5BB75B]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5BB75B]/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5BB75B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                  </div>
                  <p className="text-gray-400 ml-5">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How BOSS Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-16 text-center">
            How BOSS brings everything together
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                'Builders, flooring companies, vendors, and showrooms are set up once',
                'Products, pricing, and labor live in centralized catalogs',
                'Builder programs define what\'s available by neighborhood and series'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5BB75B] text-white flex items-center justify-center font-semibold text-lg">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-xl text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src={jobsScreen}
                alt="Product & Pricing Management"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 order-2 lg:order-1">
              <img 
                src={neighborhoodsScreen}
                alt="Scheduling & Appointments"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              {[
                'Quotes, selections, and takeoffs stay connected and accurate',
                'Appointments and scheduling happen inside the same system',
                'Every update is tracked, visible, and accountable'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5BB75B] text-white flex items-center justify-center font-semibold text-lg">
                    {idx + 4}
                  </div>
                  <div className="pt-2">
                    <p className="text-xl text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 text-center">
            A single platform. Every critical function.
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            All the tools you need to manage the complete options and selection lifecycle
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                category: 'Accounts & Setup',
                features: ['Builders', 'Flooring Companies', 'Vendors', 'Showrooms', 'Neighborhoods', 'Email Templates'],
                image: builderSetupScreen
              },
              {
                category: 'Product & Pricing Management',
                features: ['Catalogs', 'Builder Programs', 'Takeoffs', 'Flooring Calculator'],
                image: flooringCatalogScreen
              },
              {
                category: 'Selections & Quotes',
                features: ['Price Requests', 'Quotes', 'Buyer Selections', 'Color Selections'],
                image: editFlooringProductScreen
              },
              {
                category: 'Scheduling & Operations',
                features: ['Design Appointments', 'Calendar Views', 'Jobs & Customers'],
                image: appointmentsScreen
              }
            ].map((group, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  {typeof group.image === 'string' ? (
                    <ImageWithFallback 
                      src={group.image}
                      alt={group.category}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={group.image}
                      alt={group.category}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-gray-900 mb-4">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-[#5BB75B] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BOSS is Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Why BOSS is different
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              {[
                'Designed specifically for builders and design centers',
                'Eliminates spreadsheets entirely',
                'Holds every role accountable in one system',
                'Reduces cycle time from selection to approval',
                'Built to scale across multiple locations and thousands of homes'
              ].map((diff, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB75B] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{diff}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src={bossDiagram}
                alt="BOSS ecosystem diagram"
                className="w-full h-auto bg-white p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Grade */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
              Enterprise-grade by design
            </h2>
            <p className="text-xl text-gray-300 mb-16">
              Built to support high-volume operations without sacrificing performance or security.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Modern front-end built for speed and real-time updates',
                'Robust backend designed for reliability and flexibility',
                'Scalable infrastructure built to grow with large builders',
                'Secure access controls, encryption, and monitoring'
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-left">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BB75B] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who BOSS is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-16 text-center">
            Who BOSS is built for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Home Builders', Icon: Building2 },
              { title: 'Flooring Companies', Icon: Hammer },
              { title: 'Design Centers & Showrooms', Icon: Sparkles },
              { title: 'Vendors & Trades', Icon: Package }
            ].map((audience, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#5BB75B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#5BB75B] transition-colors">
                  <audience.Icon className="w-8 h-8 text-[#5BB75B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900">{audience.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5BB75B] to-[#4FA84F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Launching soon
          </h2>
          <p className="text-xl mb-8 text-white/90">
            BOSS is currently in final development and preparation for launch.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-12 py-6 border border-white/30">
            <p className="text-3xl font-semibold">Coming Q1 2026</p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
              Be first to know when BOSS launches
            </h2>
            <p className="text-xl text-gray-600">
              Join the waitlist to receive launch updates, early access opportunities, and product announcements.
            </p>
          </div>
          
          {submitted ? (
            <div className="bg-[#5BB75B] text-white rounded-2xl p-12 text-center">
              <Check className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank you for joining!</h3>
              <p className="text-lg">We'll be in touch soon with updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Name
                  </label>
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-gray-700">
                    Company
                  </label>
                  <Input
                    name="company"
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block mb-2 text-gray-700">
                    Role
                  </label>
                  <Input
                    name="role"
                    id="role"
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email
                  </label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#5BB75B] hover:bg-[#4FA84F] text-white py-6"
                  size="lg"
                >
                  Join the Waitlist
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="BOSS" className="h-8 w-auto" />
            </div>
            <p className="text-gray-600">
              Builder Options Selection System - Unifying the homebuilding ecosystem
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="mailto:info@boss.com" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
