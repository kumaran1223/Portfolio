const Certifications = () => {
  const certifications = [
    {
      icon: 'fa-book',
      title: 'Fullstack Web Development Bootcamp',
      description: 'The Ultimate 2023 Fullstack Web Development Bootcamp (Udemy)',
    },
    {
      icon: 'fa-code',
      title: 'MERN Full Stack Development',
      description: 'Training from Futuro Focus',
    },
    {
      icon: 'fa-award',
      title: 'Diploma in Office Automation',
      description: 'BSS Center (Achieved Distinction)',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[--card-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[--accent-color] mb-16 border-b border-[--border-color] pb-4 neon-text transition-colors duration-500">
          Certifications & Workshops
        </h2>
        <p className="text-lg text-[--text-color]/80 text-center max-w-3xl mx-auto mb-16 transition-colors duration-500">
          My dedication to continuous learning is evidenced by formal training in both full-stack development and 
          specialized software applications.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-[--border-color] transition-colors duration-500 flex flex-col items-center text-center hover:neon-shadow"
            >
              <i className={`fas ${cert.icon} text-5xl text-[--accent-color] mb-4`}></i>
              <h3 className="text-xl font-bold text-[--text-color] mb-2">{cert.title}</h3>
              <p className="text-md text-[--text-color]/70">{cert.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-md text-[--text-color]/70">
            Also attended: Hands-on Workshop on Developing an IoT Device By MIIT
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

