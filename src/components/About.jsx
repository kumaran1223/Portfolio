const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[--accent-color] mb-16 border-b border-[--border-color] pb-4 neon-text transition-colors duration-500">
          About Me & Experience
        </h2>
        <p className="text-lg text-[--text-color]/80 text-center max-w-3xl mx-auto mb-16 transition-colors duration-500">
          My professional journey focuses on bridging high-fidelity design with scalable code. I transform Figma concepts 
          into responsive web applications, driven by a commitment to clean code and superior user experience.
        </p>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-xl text-[--text-color] leading-relaxed transition-colors duration-500">
              I am an Aspiring Web Developer with hands-on experience in building modern, performant solutions using{' '}
              <strong>React.js, Python, and robust database technologies</strong>. I have completed my MCA at 
              MEASI Institute of Information Technology (2023-2025), building upon my BCA degree. My goal is to leverage 
              my full-stack knowledge to contribute to high-impact, innovative projects.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-[--card-color] rounded-lg shadow-xl p-8 border border-[--border-color] transition-colors duration-500 hover:neon-shadow">
              <h3 className="text-2xl font-bold text-[--accent-color] mb-3">Web Developer Intern</h3>
              <p className="text-lg text-[--text-color] mb-2">TechnoHacks Solutions Pvt. Ltd.</p>
              <p className="text-md text-[--text-color]/60 mb-4">JUL-AUG 2024</p>
              <p className="text-[--text-color]/80">
                During this internship, I gained hands-on experience by designing and developing responsive web applications 
                using core technologies like HTML, CSS, and JavaScript, with a strong focus on applying modern UI/UX principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

