const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 relative">
      <div className="max-w-4xl py-24 md:py-0">
        <p className="text-xl font-medium text-[--accent-color] mb-4 transition-colors duration-500">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-8xl font-extrabold text-[--text-color] mb-4 transition-colors duration-500">
          KUMARAN.S
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[--accent-color] mb-6 neon-text transition-colors duration-500">
          I Design & Develop Mesmerizing Websites.
        </h2>
        <p className="text-lg md:text-xl text-[--text-color]/70 mb-10 max-w-2xl mx-auto transition-colors duration-500">
          Frontend architect specializing in <strong>React</strong>, building highly responsive, user-centric web applications. 
          Driven by <strong>Python</strong> and full-stack logic to deliver measurable impact. This portfolio showcases my 
          commitment to exceptional digital architecture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-[--accent-color] text-[--bg-color] font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition duration-300 neon-shadow"
          >
            View Core Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1TZPEJkqb6gcN7oj7nZDv_zqJUkehKOJZ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[--accent-color] text-[--accent-color] font-bold py-3 px-8 rounded-full text-lg hover:bg-[--accent-color] hover:text-[--bg-color] transition duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/kumaran1223"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-3xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kumarans311221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-3xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

