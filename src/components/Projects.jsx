const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce AI',
      description:
        'Intelligent e-commerce application featuring personalized product recommendations, secure user authentication, and cart management. Built using HTML, CSS, JavaScript, Python, and AI APIs.',
      image: 'https://placehold.co/400x250/0A192F/00FFC0?text=E-Commerce+AI+Mockup',
      tags: ['React', 'Tailwind CSS', 'Supabase'],
      link: 'https://ecommerce-ai-rho.vercel.app/',
      isLive: true,
    },
    {
      title: 'StayFinder',
      description:
        'Responsive hotel booking platform enabling users to seamlessly search, filter, and book stays with real-time data management (Supabase).',
      image: 'https://placehold.co/400x250/0A192F/00FFC0?text=StayFinder+Mockup',
      tags: ['React', 'Supabase', 'Real-Time Data'],
      link: 'https://stayfinder1.netlify.app/',
      isLive: true,
    },
    {
      title: 'Aadhaar OCR Automation',
      description:
        'Web application to securely extract Aadhaar details from password-protected PDFs, utilizing Python, FastAPI, and Tesseract OCR for structured JSON output.',
      image: 'https://placehold.co/400x250/0A192F/00FFC0?text=OCR+Automation+Mockup',
      tags: ['Python', 'FastAPI', 'OCR'],
      link: null,
      isLive: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[--card-color] transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-[--accent-color] mb-16 border-b border-[--border-color] pb-4 neon-text transition-colors duration-500">
          Featured Code Constructs
        </h2>
        <p className="text-lg text-[--text-color]/80 text-center max-w-3xl mx-auto mb-16 transition-colors duration-500">
          These projects showcase my design sensibility, interactive development skills, and back-end logic. Hover over 
          each card to feel the electric energy of the solution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[--bg-color] rounded-xl overflow-hidden shadow-xl border border-[--border-color] transition-colors duration-500 hover:neon-shadow"
            >
              <img
                src={project.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x250/112240/00FFC0?text=' + encodeURIComponent(project.title);
                }}
                alt={`${project.title} Mockup`}
                className="w-full h-auto object-cover border-b border-[--border-color]"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[--text-color] mb-3">{project.title}</h3>
                <p className="text-[--text-color]/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-semibold bg-[--accent-color]/20 text-[--accent-color] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.isLive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[--accent-color] text-[--bg-color] font-bold py-2 px-6 rounded-full hover:opacity-90 transition duration-300 neon-shadow"
                  >
                    View Live
                  </a>
                ) : (
                  <span className="inline-block bg-[--border-color] text-[--text-color]/60 font-bold py-2 px-6 rounded-full cursor-not-allowed">
                    Private Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

