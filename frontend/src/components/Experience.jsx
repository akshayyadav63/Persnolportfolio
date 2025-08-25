const Experience = () => {
  const experiences = [
    {
      title: 'Front-End Development (React) Training',
      organization: 'Coding Blocks, GLA University',
      location: 'Mathura',
      period: 'June 2024 – July 2024',
      type: 'Professional Training',
      description: [
        'Built responsive UI using React.js & Tailwind CSS with reusable components',
        'Applied hooks & prop drilling for efficient state management',
        'Gained hands-on experience with modern React development practices',
        'Worked on real-world projects and best coding practices'
      ],
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    }
  ];

  const activities = [
    {
      title: 'First Runner-up - Advitiya x JPD Hub Hackathon',
      organization: 'IIT Ropar',
      description: 'Developed an innovative solution under competitive constraints, demonstrating problem-solving, teamwork, and technical skills in a 48-hour coding marathon.',
      achievement: '🏆 First Runner-up',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      skills: ['Problem Solving', 'Team Leadership', 'Innovation']
    },
    {
      title: 'Hackofiesta 6.0 (AI Hackathon)',
      organization: 'IIIT Lucknow',
      description: 'Participated in AI-focused hackathon and secured position among top 25 teams across India, competing with 500+ teams nationwide.',
      achievement: '🏅 Top 25 Teams',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Competition']
    },
    {
      title: 'Innovate X Hackathon',
      organization: 'Shyam Lal College (University of Delhi)',
      description: 'Participated in innovation-focused hackathon, showcasing creative problem-solving skills and collaborative development.',
      achievement: '💡 Innovative Solutions',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      skills: ['Innovation', 'Creative Thinking', 'Collaboration']
    },
    {
      title: 'Competitive Programming Excellence',
      organization: 'LeetCode & GeeksforGeeks',
      description: 'Solved 400+ algorithmic problems, building a solid foundation in data structures, algorithms, and competitive programming.',
      achievement: '💻 400+ Problems Solved',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
              My Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            My journey in software development through intensive training programs, competitive hackathons, 
            and continuous learning experiences that shaped my technical expertise.
          </p>
        </div>

        {/* Training Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <span className="mr-3">🎯</span>
              Professional Training
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Intensive training programs that provided hands-on experience with modern development practices.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-r ${exp.bgColor} rounded-3xl p-8 border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${exp.color} rounded-2xl text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-blue-600 font-semibold text-lg">
                            {exp.organization} • {exp.location}
                          </p>
                        </div>
                        <div className="mt-3 lg:mt-0 flex flex-col items-start lg:items-end">
                          <span className="inline-block bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                            {exp.type}
                          </span>
                          <span className="text-gray-600 text-sm mt-2">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.description.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Activities */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <span className="mr-3">🏆</span>
              Achievements & Competitions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition for technical excellence, innovation, and competitive programming achievements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${activity.bgColor} rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full`}>
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${activity.color} rounded-2xl text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {activity.achievement.split(' ')[0]}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-medium">Achievement</p>
                        <p className="text-lg font-bold text-gray-900">{activity.achievement.substring(2)}</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {activity.title}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-4">{activity.organization}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">{activity.description}</p>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-3">Key Skills Demonstrated:</p>
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl transform hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together!</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                I'm always excited about new opportunities and challenging projects. 
                Let's connect and discuss how we can create something incredible that makes a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start a Conversation
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </svg>
                  View My Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
