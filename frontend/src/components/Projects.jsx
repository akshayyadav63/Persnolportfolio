const Projects = () => {
  const projects = [
    {
      title: 'Quick.ai - AI-Powered SaaS Application',
      description: 'Advanced AI-powered SaaS platform with secure authentication and subscription billing using Clerk. Integrates Gemini API for intelligent content generation and resume analysis.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clerk Auth', 'Gemini API', 'ClipDrop API'],
      githubLink: 'https://github.com/akshayyadav63/Quick_Ai',
      liveLink: 'https://quick-ai-frontend-phi.vercel.app/',
      period: 'July 2025 – August 2025',
      gradient: 'from-blue-600 to-cyan-600',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa1ebc5b67aec4d009962145ee3462ec2%2Fc7c54b953bb747e18d3370250772c4e8?format=webp&width=800',
      category: 'AI/SaaS'
    },
    {
      title: 'ResumeXpert - Professional Resume Builder',
      description: 'Sophisticated resume builder featuring customizable templates, real-time live preview, and multi-format export (PDF, Word, HTML).',
      technologies: ['React', 'Node.js', 'JWT', 'PDF Generation', 'Tailwind CSS', 'Export APIs'],
      githubLink: 'https://github.com/akshayyadav63/ResumeXpert_Web_App',
      liveLink: 'https://resumexpert-web-app.onrender.com/',
      period: 'June 2025 – July 2025',
      gradient: 'from-violet-600 to-purple-600',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa1ebc5b67aec4d009962145ee3462ec2%2F4e58364aeb3b4adb8807b710d90f4143?format=webp&width=800',
      category: 'Productivity'
    },
    {
      title: 'AggroBooster - Smart Farming Assistant',
      description: 'AI-powered precision farming platform achieving 70% accurate crop predictions through advanced soil and weather data analysis.',
      technologies: ['React', 'AI/ML', 'JWT', 'OTP Authentication', 'Tailwind CSS', 'Weather API'],
      githubLink: 'https://github.com/akshayyadav63/Innovative_Incubators_AgroBooster',
      liveLink: 'https://agrobooster.pages.dev/',
      period: 'January 2025 – February 2025',
      gradient: 'from-emerald-600 to-teal-600',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa1ebc5b67aec4d009962145ee3462ec2%2F225b48a330ca4a31ae0b1bc941d34cfb?format=webp&width=800',
      category: 'AgriTech'
    },
    {
      title: 'ShowcaseX - Talent Showcase Platform',
      description: 'A comprehensive talent showcase platform designed to enable professionals to register and showcase their skills with admin approval.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Real-time Notifications'],
      githubLink: 'https://github.com/akshayyadav63/Innovative_Incubators_advitiyaXjpd',
      liveLink: '#',
      period: 'September 2024 – Present',
      gradient: 'from-orange-600 to-red-600',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa1ebc5b67aec4d009962145ee3462ec2%2F2e5b941b34854f6793aa22e51d6c497d?format=webp&width=800',
      category: 'Platform'
    },
    {
      title: 'Matratvcare - E-commerce + MLM Platform',
      description: 'A comprehensive e-commerce platform integrated with Multi-Level Marketing (MLM) system. Features complete product management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Payment Gateway', 'MLM System'],
      githubLink: 'https://github.com/akshayyadav63/matratv-connect',
      liveLink: 'https://matratv-care.netlify.app/',
      period: 'March 2025 – Present',
      gradient: 'from-purple-600 to-indigo-600',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa1ebc5b67aec4d009962145ee3462ec2%2Fca9e4dcfe957453fa4a3dc6a6bd1487c?format=webp&width=800',
      category: 'E-commerce'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-blue-50 to-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      
      <div className="container-max relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase mb-4">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
            </svg>
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, AI-powered solutions, and innovative web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-44 bg-gray-50">
                <img 
                  src={project.image} 
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-semibold border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Quick Access Overlay */}
                {project.liveLink !== '#' && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 flex items-center space-x-2 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Live</span>
                    </a>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium transition-colors duration-200 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  
                  {project.liveLink !== '#' ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 bg-gradient-to-r ${project.gradient} text-white px-3 py-2 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 text-sm font-medium`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Demo</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-1 bg-gray-400 text-white px-3 py-2 rounded-lg cursor-not-allowed opacity-60 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Soon</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-900 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Explore More Projects
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Visit my GitHub for additional projects and contributions
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/akshayyadav63"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm whitespace-nowrap"
              >
                <span>View GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
