/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, useEffect } from 'react';
import { Github, ChevronRight, Linkedin, Mail, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import projects from '@/data/projects';
import experiences from '@/data/experiences';
import education from '@/data/education';
import skills from '@/data/skills';
import certifications from '@/data/certifications';


const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = ['about', 'experience', 'education', 'projects', 'skills', 'certifications'];

  const allCategories = [
    { title: 'Languages', items: skills.programmingLanguages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Libraries', items: skills.libraries },
    { title: 'Tools', items: skills.toolsPlatforms },
    { title: 'Databases', items: skills.databases },
    { title: 'Testing', items: skills.testingPerformance },
    { title: 'Markup', items: skills.documentationMarkup },
  ];

  const [showAll, setShowAll] = useState(false);
  const categoriesToShow = showAll ? allCategories : allCategories.slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 155;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };


  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCertifications = certifications.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));


  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      <div className="lg:flex lg:min-h-screen lg:gap-4 lg:max-w-7xl lg:mx-auto">
        {/* Left Side - Fixed Header */}
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-24 lg:pb-8 lg:pl-28">
          <div className="px-6 pt-28 lg:px-12 lg:pt-12">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Nubthong Worathong
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              Powered by new ideas, caffeine, and an infinite build loop.
            </p>

            {/* Navigation */}
            <nav className="hidden lg:block mt-12">
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`group flex items-center py-2 transition-all duration-200 ${activeSection === section ? 'text-slate-200' : 'hover:text-slate-200'
                        }`}
                    >
                      <span className={`mr-4 h-px transition-all duration-200 ${activeSection === section
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                        }`}></span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {section}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="px-6 lg:px-12 pt-6 pb-4">
            <div className="space-y-4">

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/namtanvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-lg hover:bg-slate-800 transition-all duration-200"
                  title="Check out my code adventures"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Code adventures
                  </span>
                </a>

                <a
                  href="https://linkedin.com/nubthong-worathong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-lg hover:bg-slate-800 transition-all duration-200"
                  title="Let's connect professionally"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Professional vibes
                  </span>
                </a>

                <a
                  href="mailto:nubthongwor@gmail.com"
                  className="group relative p-2 rounded-lg hover:bg-slate-800 transition-all duration-200"
                  title="Drop me a line!"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Say hello!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 lg:pt-36 lg:pb-8 pr-10">
          <div className="px-6 lg:px-2">

            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
                About
              </h2>
              <div className="space-y-4 tracking-normal">
                <div className="space-y-4 tracking-normal">
                  <p>
                    Hi! I'm a <span className="text-slate-200">software engineer</span> who loves turning ideas into real products. I started my coding adventure with Pascal, yes, the dinosaur of programming languages and then dove into computer science. Since then, I've explored <span className="text-slate-200">full-stack development</span>, <span className="text-slate-200">machine learning</span>, and <span className="text-slate-200">large language models</span>. I'm always looking for ways technology can make my life easier, more fun, or just a bit smarter.
                  </p>
                  <p>
                    My approach to learning is to build things, even if it means my unfinished projects could fill an entire warehouse clearance sale. I'm still convinced my next  <span className="bg-teal-600/30 px-1 rounded text-slate-300">million-dollar idea</span> is just one coffee away.
                  </p>
                </div>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
                Experience
              </h2>

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="group relative -mx-4 px-4 py-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-medium leading-snug text-slate-200">
                        {exp.title}
                        <a
                          className="inline-flex items-baseline"
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="text-teal-300 ml-1">@ {exp.company}</span>
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 sm:mt-0 font-mono">
                        {exp.range}
                      </p>
                    </div>

                    <ul className="mt-3 text-sm leading-relaxed list-disc list-inside text-slate-400">
                      {exp.description.map((desc, idx2) => (
                        <li key={idx2} className="marker:text-slate-400">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {exp.tech && exp.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((techItem, techIdx) => (
                          <span
                            key={techIdx}
                            className="rounded-md bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>


            <section id="education" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="group">
                    {/* Main Education Info */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
                        <p className="mt-1 text-sm font-medium text-slate-400">
                          <a
                            href={edu.schoolUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors"
                          >
                            {edu.school}
                          </a>
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 sm:mt-0 font-mono">
                        {edu.period}
                      </p>
                    </div>

                    {edu.advisor && edu.advisorUrl && (
                      <p className="text-sm text-slate-400 mb-4">
                        <span className="text-slate-500">Advisor:</span>{" "}
                        <a
                          href={edu.advisorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-300 hover:text-teal-200 transition-colors font-bold"
                        >
                          {edu.advisor}
                        </a>
                      </p>
                    )}

                    {((edu.activities && edu.activities.length > 0)) && (
                      <div className="grid  gap-6 pt-4 border-t border-slate-800">
                        {edu.activities && edu.activities.length > 0 && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wide font-semibold text-slate-200 mb-3">
                              Activities & Leadership
                            </h4>

                            <ul className="mt-3 text-sm leading-relaxed list-disc list-inside text-slate-400">
                              {edu.activities.map((activity, idx) => (
                                <li key={idx} className="marker:text-slate-400">
                                  {activity}
                                </li>
                              ))}
                            </ul>


                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
                Projects
              </h2>
              <div>
                {projects.map((project, idx) => (
                  <div
                    key={idx}  // use index as key instead of project.id
                    className="group relative hover:bg-slate-800/50 -mx-4 px-4 py-6 rounded-md transition-colors"
                  >
                    {/* Project Content */}
                    <div className="space-y-3">
                      <h3>
                        <a
                          className="inline-flex items-center font-semibold text-slate-200"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.title}
                          <ChevronRight className="inline-block h-4 w-4 ml-1 text-teal-300" />
                        </a>
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="rounded-md bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4 pt-1">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-slate-400 hover:text-teal-300 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-slate-400 hover:text-teal-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </section>


            <section id="skills" className="mb-16 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
                Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
                {categoriesToShow.map(({ title, items }) => (
                  <div key={title}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-3">
                      {title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {items.map((skill) => (
                        <div key={skill} className="text-sm font-medium text-slate-400">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="mt-6 flex items-center text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
                aria-controls="skills"
              >
                {showAll ? (
                  <>
                    Show less <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show more <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </button>
            </section>

            <section id="certifications" className="lg:mb-68 scroll-mt-16 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
                Certifications
              </h2>
              <div className="space-y-4">
                {visibleCertifications.map(({ title, issuer, date, url }, index) => (
                  <div
                    key={index}  // use index as key instead of id
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
                  >
                    <div>
                      <h3 className="text-slate-200 text-sm font-semibold">{title}</h3>
                      <p className="text-sm text-slate-400">
                        {issuer}{' '}
                        {url && (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal-400 hover:text-teal-300 transition-colors ml-1"
                          >
                            View Certificate
                          </a>
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{date}</span>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-6 text-xs text-slate-400 font-mono select-none">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="px-2 py-1 rounded text-slate-500 disabled:opacity-30 hover:text-teal-400 transition"
                  >
                    ‹
                  </button>
                  <span>
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="px-2 py-1 rounded text-slate-500 disabled:opacity-30 hover:text-teal-400 transition"
                  >
                    ›
                  </button>
                </div>
              )}
            </section>

            <section id="duck" className="scroll-mt-16 lg:scroll-mt-24">
              <a href="/me" className="fixed bottom-4 right-4 z-50">
                <img
                  src="/duck.gif"
                  alt="Animated rubber duck"
                  className="w-16 h-16 animate-waddle"
                />
              </a>
            </section>


            <footer className="text-sm space-y-2 border-t border-slate-700 pt-6 pb-6">
              <p className="text-center text-sm text-slate-400 max-w-md mx-auto">
                Built with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 hover:underline transition-colors duration-200"
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 hover:underline transition-colors duration-200"
                >
                  Tailwind CSS
                </a>
                , deployed via{' '}
                <a
                  href="https://pages.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 hover:underline transition-colors duration-200"
                >
                  GitHub Pages
                </a>
                .
              </p>
            </footer>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;