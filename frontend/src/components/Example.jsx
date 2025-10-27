import React from "react";

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">John Doe</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-purple-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#education"
                className="text-purple-300 hover:text-white transition-colors"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-purple-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-purple-300 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-purple-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-purple-300 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://placehold.co/200x200/6d28d9/ffffff?text=JD"
              alt="John Doe"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8">
            Software Engineer & Full Stack Developer
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Passionate about building elegant solutions to complex problems.
            Specializing in modern web technologies and scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/600x400/4f46e5/ffffff?text=About+Me"
                alt="About Me"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate software engineer with over 5 years of
                experience building web applications and solving complex
                technical challenges. My journey in technology began with a
                fascination for how things work, which evolved into a career
                creating impactful software solutions.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in full-stack development with expertise in React,
                Node.js, and cloud technologies. I believe in writing clean,
                maintainable code and continuously learning new technologies to
                stay at the forefront of the industry.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, mentoring junior developers, or exploring new hiking
                trails with my camera.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Full Stack
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  React
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  AWS
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Education
          </h2>
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-purple-900/50 to-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-purple-300 text-lg mb-2">
                    Stanford University
                  </p>
                  <p className="text-gray-400">2018 - 2020</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                    GPA: 3.9/4.0
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                Specialized in Distributed Systems and Machine Learning. Thesis:
                "Optimizing Microservice Architectures for High-Throughput
                Applications"
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-purple-300 text-lg mb-2">
                    Massachusetts Institute of Technology
                  </p>
                  <p className="text-gray-400">2014 - 2018</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                    GPA: 3.8/4.0
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                Focused on Web Development and Algorithms. Graduated with honors
                and received the Outstanding Senior Award in Computer Science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/6d28d9/ffffff?text=E-Commerce+Platform"
                alt="E-Commerce Platform"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-300 mb-4">
                A full-stack e-commerce solution with React, Node.js, and
                MongoDB. Features include user authentication, payment
                processing, and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  React
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Node.js
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/4f46e5/ffffff?text=Task+Management+App"
                alt="Task Management App"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Task Management App
              </h3>
              <p className="text-gray-300 mb-4">
                A collaborative task management application with real-time
                updates, drag-and-drop functionality, and team collaboration
                features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Vue.js
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Firebase
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/7c3aed/ffffff?text=AI+Chatbot"
                alt="AI Chatbot"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                AI-Powered Chatbot
              </h3>
              <p className="text-gray-300 mb-4">
                An intelligent chatbot using natural language processing to
                provide customer support with machine learning capabilities for
                continuous improvement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Python
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  TensorFlow
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Flask
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/9333ea/ffffff?text=Health+Tracker"
                alt="Health Tracker"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Health & Fitness Tracker
              </h3>
              <p className="text-gray-300 mb-4">
                A comprehensive health tracking application with workout
                planning, nutrition logging, and progress visualization
                features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  React Native
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Redux
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  GraphQL
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/a855f7/ffffff?text=Cloud+Dashboard"
                alt="Cloud Dashboard"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Cloud Infrastructure Dashboard
              </h3>
              <p className="text-gray-300 mb-4">
                A monitoring dashboard for cloud infrastructure with real-time
                metrics, alerting system, and automated scaling recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  AWS
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Docker
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Kubernetes
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gradient-to-b from-purple-900/30 to-slate-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <img
                src="https://placehold.co/400x250/c084fc/ffffff?text=Social+Network"
                alt="Social Network"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Social Networking Platform
              </h3>
              <p className="text-gray-300 mb-4">
                A feature-rich social network with real-time messaging, content
                sharing, and advanced privacy controls built with modern web
                technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Next.js
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  PostgreSQL
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  Socket.io
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Frontend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "React & React Native", level: 95 },
                  { name: "Vue.js", level: 85 },
                  { name: "TypeScript", level: 90 },
                  { name: "HTML5/CSS3", level: 95 },
                  { name: "Tailwind CSS", level: 85 },
                  { name: "Redux & Context API", level: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Backend & DevOps
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js & Express", level: 90 },
                  { name: "Python & Django", level: 80 },
                  { name: "AWS & Azure", level: 85 },
                  { name: "Docker & Kubernetes", level: 75 },
                  { name: "MongoDB & PostgreSQL", level: 85 },
                  { name: "CI/CD Pipelines", level: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get In Touch
          </h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-slate-800/30 p-8 rounded-xl border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in new opportunities and challenging
                  projects. Whether you have a question or just want to say hi,
                  I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-purple-400 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-purple-400 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-purple-400 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2023 John Doe. All rights reserved. Built with passion and React.
          </p>
        </div>
      </footer>
    </div>
  );
}
