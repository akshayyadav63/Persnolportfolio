const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-gray-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-subtle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-subtle-float animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-pulse animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-professional-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-gentle-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-48 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-subtle-float animation-delay-4000"></div>
      </div>

      <div className="container-max relative z-10 flex items-center min-h-screen py-20">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              {/* Professional Greeting */}
              <div className="mb-6 animate-slide-in-left animation-delay-500">
                <span className="inline-flex items-center bg-blue-600/10 backdrop-blur-sm text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20 hover:bg-blue-600/20 transition-all duration-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                  Welcome to my portfolio
                </span>
              </div>
              
              {/* Name and Title with Typewriter Effect */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-in-left animation-delay-700">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
                  Akshay Kumar
                </span>
              </h1>
              
              {/* Professional Title with Animation */}
              <div className="mb-8 animate-slide-in-left animation-delay-1000">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
                  <span className="text-white font-semibold">Software Engineer</span> &{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold animate-gradient-shift">
                    Full Stack Developer
                  </span>
                </h2>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for opportunities</span>
                  <div className="w-4 h-4 text-green-400 animate-professional-bounce">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Professional Description with Typing Animation */}
              <div className="animate-slide-in-left animation-delay-1200">
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate about building{' '}
                  <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">scalable web applications</span>{' '}
                  with modern technologies. Specialized in{' '}
                  <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">React.js</span>,{' '}
                  <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300">Node.js</span>, and{' '}
                  <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300">AI integration</span>.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-in-left animation-delay-1500">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl animate-professional-glow"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                    </svg>
                    <span className="animate-shimmer">View My Work</span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 bg-white rounded-xl hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl backdrop-blur-glass"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Let's Connect
                  </span>
                </a>
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-slide-in-left animation-delay-1800">
                {[
                  {
                    href: "https://github.com/akshayyadav63",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    label: "GitHub",
                    color: "hover:bg-gray-800"
                  },
                  {
                    href: "https://www.linkedin.com/in/akshay-yadav-b5942832a/",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    label: "LinkedIn",
                    color: "hover:bg-blue-600"
                  },
                  {
                    href: "tel:+916394330610",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone",
                    color: "hover:bg-green-600"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`group p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/10 ${social.color} hover-lift`}
                    title={social.label}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Professional Profile */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right animation-delay-1000">
              <div className="relative">
                {/* Enhanced Profile Image Container */}
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-professional-glow"></div>
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-shift"></div>
                    <img
                      src="https://github.com/akshayyadav63.png"
                      alt="Akshay Kumar - Software Engineer"
                      className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 via-transparent to-transparent z-20"></div>
                  </div>
                </div>

                {/* Enhanced Professional Stats */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-slide-in-left animation-delay-2000 hover-lift">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white flex items-center justify-center space-x-1">
                      <span>5+</span>
                      <svg className="w-5 h-5 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-300">Projects</div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-slide-in-right animation-delay-2000 hover-lift">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white flex items-center justify-center space-x-1">
                      <span>3+</span>
                      <svg className="w-5 h-5 text-blue-400 animate-professional-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-300">Years Experience</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-14 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform -translate-y-1/2 animate-fade-in-up animation-delay-2500 hover-lift">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white flex items-center justify-center space-x-1">
                      <span>400+</span>
                      <svg className="w-4 h-4 text-yellow-400 animate-gentle-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-300">Problems Solved</div>
                  </div>
                </div>

                {/* Floating Skills Badges */}
                <div className="absolute -left-12 top-16 bg-blue-600/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-400/30 animate-subtle-float animation-delay-3000">
                  <span className="text-blue-300 text-sm font-medium">React.js</span>
                </div>
                
                <div className="absolute -right-16 bottom-16 bg-purple-600/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/30 animate-subtle-float animation-delay-4000">
                  <span className="text-purple-300 text-sm font-medium">Node.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-professional-bounce">
            <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group">
              <span className="text-sm mb-2 font-medium group-hover:scale-110 transition-transform duration-300">Explore More</span>
              <div className="p-2 rounded-full border border-gray-600 group-hover:border-white transition-colors duration-300">
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
