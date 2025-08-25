const About = () => {
  const skills = {
    languages: ['Java', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'Postman', 'Vercel', 'Render', 'npm', 'VS Code']
  };

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'GLA University, Mathura',
      duration: 'Expected June 2026',
      status: 'Currently Pursuing',
      icon: '🎓',
      description: 'Comprehensive curriculum covering software engineering, data structures, algorithms, database management, and modern web technologies with practical application focus.'
    },
    {
      degree: 'Intermediate Education',
      field: 'Science Stream (PCM)',
      institution: 'Saraswati Vidhya Mandir Inter College',
      location: 'Chirgaon',
      duration: 'Completed May 2022',
      status: 'Completed',
      icon: '📚',
      description: 'Strong foundation in mathematics, physics, and computer science fundamentals, preparing for advanced technical education.'
    }
  ];

  const achievements = [
    {
      title: 'First Runner-up',
      event: 'Advitiya x JPD Hub Hackathon',
      organization: 'IIT Ropar',
      icon: '🏆',
      color: 'from-amber-500 to-orange-500',
      impact: 'Competed against 100+ teams nationwide'
    },
    {
      title: 'Top 25 Teams',
      event: 'Hackofiesta 6.0 AI Hackathon',
      organization: 'IIIT Lucknow',
      icon: '🚀',
      color: 'from-emerald-500 to-teal-500',
      impact: 'Selected from 500+ participating teams'
    },
    {
      title: '400+ Problems Solved',
      event: 'Competitive Programming',
      organization: 'LeetCode & GeeksforGeeks',
      icon: '💻',
      color: 'from-blue-500 to-indigo-500',
      impact: 'Strong algorithmic problem-solving skills'
    }
  ];

  const highlights = [
    {
      number: '5+',
      label: 'Projects Completed',
      description: 'Full-stack applications deployed'
    },
    {
      number: '3+',
      label: 'Years Learning',
      description: 'Continuous skill development'
    },
    {
      number: '70%',
      label: 'AI Accuracy',
      description: 'AggroBooster crop predictions'
    },
    {
      number: '100%',
      label: 'Commitment',
      description: 'To excellence and growth'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      
      <div className="container-max relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase mb-4">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profile</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dedicated software engineer with a passion for creating innovative solutions and building scalable applications. 
            Experienced in full-stack development, AI integration, and modern web technologies with a proven track record 
            of delivering high-quality projects.
          </p>
        </div>

        {/* Professional Highlights */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{highlight.number}</div>
                <div className="text-sm font-semibold text-blue-600 mb-1">{highlight.label}</div>
                <div className="text-xs text-gray-600">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Education Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🎓</span>
                Educational Background
              </h3>
              <p className="text-gray-600 mb-8">
                Strong academic foundation with focus on computer science, software engineering, and practical application.
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                          <div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {edu.degree}
                            </h4>
                            <p className="text-blue-600 font-semibold">{edu.field}</p>
                          </div>
                          <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0">
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">
                          {edu.institution} {edu.location && `• ${edu.location}`}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">{edu.duration}</p>
                        <p className="text-gray-600 leading-relaxed text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">⚡</span>
                Technical Expertise
              </h3>
              <p className="text-gray-600 mb-8">
                Proficient in modern technologies and frameworks with hands-on experience in building production-ready applications.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Programming Languages */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Frontend */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-emerald-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-purple-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  Databases & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.databases, ...skills.tools].map((skill) => (
                    <span key={skill} className="bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-orange-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Achievements */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <span className="mr-3">🏆</span>
            Key Achievements
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Recognition for technical excellence, innovation, and competitive programming achievements that demonstrate 
            strong problem-solving abilities and commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-2">{achievement.event}</p>
                <p className="text-gray-600 text-sm mb-3">{achievement.organization}</p>
                <p className="text-gray-700 text-sm font-medium">{achievement.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Statement */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl">
              💼
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready for New Challenges</h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              I'm passionate about creating innovative solutions that solve real-world problems. 
              Always eager to learn new technologies and contribute to meaningful projects that make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Discuss Opportunities
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                </svg>
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
