

// import React from 'react';
import { Link } from 'react-router-dom';
import { FiActivity, FiTool, FiShield, FiAward, FiArrowRight, FiCode, FiGrid, FiBriefcase, FiMonitor, FiSmartphone, FiZap, FiDatabase, FiLayout, FiMapPin, FiCloud } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase as FaDbIcon, FaJava, FaVuejs, FaDocker, FaCode as FaCodeIcon, FaPaintBrush, FaChartLine } from "react-icons/fa";

const Home = () => {
  // hero data cards
  const cardsData = [
    {
      icon: <FiActivity />,
      title: "Business first innovation",
      description: "We start from the operational problem and the numbers behind it, then choose the technology that fixes the problem and delivers the best ROI.",
    },
    {
      icon: <FiTool />,
      title: "Custom built technology",
      description: "Software shaped around your workflows, so your team adapts less and gets more done each week.",
    },
    {
      icon: <FiShield />,
      title: "Security and compliance",
      description: "We build software that meets the highest security and compliance standards, so you can focus on your business without worrying about data breaches.",
    },
    {
      icon: <FiAward />,
      title: "A long-term technology partner",
      description: "We are not just a software development company, we are your long-term technology partner, committed to helping you achieve your business goals.",
    }
  ];
// auto scroll array
  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "SQL", icon: <FaDbIcon /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Docker", icon: <FaDocker /> },
  ];
// about array
  const aboutList = [
    { icon: <FaCodeIcon />, text: "Software engineering and system architecture" },
    { icon: <FaPaintBrush />, text: "Product and interface design" },
    { icon: <FaChartLine />, text: "Business analysis and process mapping" },
  ];

  // srvices array
  const allServices = [
    {
      icon: <FiCode />,
      title: "Custom Software Development",
      description: "Systems built around how your team actually works, instead of a template someone else outgrew."
    },
    {
      icon: <FiMonitor />,
      title: "Engine Optimization",
      description: "Improve the performance and efficiency of your existing software systems     ."
    },
    {
      icon: <FiGrid />,
      title: "Website Design and Development",
      description: "Corporate sites that load quickly, read clearly and turn visits into enquiries."
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Application Development",
      description: "Android and iOS apps for customers, field teams and agents, connected to your back office."
    },
    {
      icon: <FiZap />,
      title: "Business Process Automation",
      description: "Remove the manual steps between systems: approvals, invoicing, reporting and reconciliation."
    },
    {
      icon: <FiBriefcase />,
      title: "Enterprise Software Solutions",
      description: "Large-scale systems spanning finance, operations, procurement and management reporting."
    },
    {
      icon: <FiDatabase />,
      title: "API Development and Integration",
      description: "Connect the tools you already pay for, and open your data to partners, banks and payment providers."
    },
    {
      icon: <FiLayout />,
      title: "UI/UX Design",
      description: "Interfaces your customers and staff can use without training, from first sketch to design system."
    },
    {
      icon: <FiMapPin />,
      title: "IT Consultancy and Digital Transformation",
      description: "Technology strategy, systems reviews and transformation roadmaps before you commit to a build."
    },
    {
      icon: <FiCloud />,
      title: "Cloud Solutions and Maintenance",
      description: "Hosting, monitoring, backups and ongoing maintenance that keep live systems reliable."
    },
  ];

  return (
    <main className="w-full overflow-hidden">
     {/* auto scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll 25s linear infinite;
            width: max-content;
          }
        `}
      </style>

      
      {/* SECTION 1: HERO (Removed CTA buttons) */}
      
      <section 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-background-home-page.avif')" }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-24 sm:px-6 lg:px-8 lg:pt-32">
          
          <div className="max-w-4xl text-center mx-auto">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
              Vectalogix software
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Technology that moves <br className="hidden sm:block" /> your business forward
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              For commitments we hold on every engagement, whether it is a first prototype or a system running operations across several countries.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {cardsData.map((card, index) => (
              <div key={index} className="flex flex-col bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-dashed border-blue-400 bg-blue-50 text-2xl text-blue-600 mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-gray-300/50">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
              Our technology stack
            </p>
            <div className="relative flex overflow-hidden w-full max-w-5xl mx-auto">
              <div className="flex animate-marquee hover:[animation-play-state:paused]">
                {[...techStack, ...techStack].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 px-10 text-gray-500 transition-colors hover:text-blue-600 cursor-pointer"
                  >
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="font-bold text-lg whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    
      {/* SECTION 2: ABOUT VECTALOGIX */}
      
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="max-w-xl">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 block">
                About Vectalogix
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                We turn business challenges into technology solutions.
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Vectalogix brings software engineering, product design and a working knowledge of business operations into one team. We map how your organisation actually runs today, find where time and money leak, and build the system that closes the gap. Then we stay to keep it running as you grow.
              </p>

              <ul className="space-y-4 mb-10">
                {aboutList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="flex items-center justify-center text-blue-600 text-lg">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <Link 
                to="/about" 
                className="inline-flex items-center justify-center rounded-md border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                Discover Vectalogix
              </Link>
            </div>

            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Vectalogix team collaborating" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

   
      {/* SECTION 3: OUR SERVICES (Only shows first 4) */}
  
      <section id="services" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              The work we do, end to end.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From a single portal to a company-wide platform: strategy, design, engineering, integration and the support that keeps it stable.
            </p>
          </div>

          {/* Services Grid - We use .slice(0, 4) to only show the first 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {allServices.slice(0, 4).map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl bg-white border border-transparent hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  Learn more
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Dashed Hover Effect (Matching your screenshot) */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center rounded-full bg-white border-2 border-gray-200 px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 shadow-sm transition-all duration-300"
            >
              Explore all services
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div> 
      </section>

   
      {/* SECTION 4: HOW WE WORK */}
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side: Text Content */}
            <div className="max-w-lg">
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-4 block">
                How we work
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                A process you can follow from first call to launch.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Five stages, each with a defined output, so you always know what is being built, what it costs and what happens next.
              </p>
            </div>

            {/* Right Side: Numbered Steps */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-gray-900">1</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discover</h3>
                  <p className="text-gray-600">Workshops with the people who do the work, mapping the current process and where it costs you.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-gray-900">2</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategise</h3>
                  <p className="text-gray-600">Requirements, priorities, architecture, and a scope with a budget and timeline attached.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-gray-900">3</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600">Interface designs and clickable prototypes tested with real users before engineering starts.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-gray-900">4</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
                  <p className="text-gray-600">Iterative development with working software you can review every two weeks.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-gray-900">5</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Launch and support</h3>
                  <p className="text-gray-600">Deployment, training and handover, then monitoring, maintenance and steady improvement.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* SECTION 5: BLUE CTA BANNER */}
      {/* ========================================= */}
      <section className="pb-24 pt-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-[2.5rem] py-16 px-6 sm:px-16 text-center shadow-2xl relative overflow-hidden">
            
            {/* Optional background decorative circles to make it look premium */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-blue-200 text-sm font-bold tracking-wider uppercase mb-4 block">
                Start a project
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Let's build something that moves your business forward.
              </h2>
              <p className="text-blue-100 text-lg mb-10">
                Tell us about the process that is slowing you down. We will come back within few days with how we would approach it, what it would take, and what it would cost.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-blue-700 shadow-md hover:bg-gray-50 hover:scale-105 transition-transform duration-300"
              >
                Let's build together
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
