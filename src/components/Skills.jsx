import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'REACT JS', progress: 95 },
    { name: 'PYTHON / FastAPI', progress: 85 },
    { name: 'JAVASCRIPT (ES6+)', progress: 90 },
    { name: 'HTML5 & Tailwind CSS', progress: 95 },
    { name: 'SQL / Supabase', progress: 75 },
  ];

  const tools = [
    { icon: 'fa-database', name: 'SQL', color: 'text-gray-500' },
    { icon: 'fa-drafting-compass', name: 'Figma', color: 'text-purple-400' },
    { icon: 'fa-chart-bar', name: 'Power BI', color: 'text-blue-400' },
    { icon: 'fa-eye', name: 'Tesseract OCR', color: 'text-green-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-[--bg-color] transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[--accent-color] mb-16 border-b border-[--border-color] pb-4 neon-text transition-colors duration-500">
          Technical Toolkit & Strengths
        </h2>
        <p className="text-lg text-[--text-color]/80 text-center max-w-3xl mx-auto mb-16 transition-colors duration-500">
          A snapshot of my technical prowess, visualized by these dynamic proficiency bars. These represent the core 
          technologies I use to build robust and responsive applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Proficiency Bars */}
          <div>
            <h3 className="text-2xl font-bold text-[--text-color] mb-6 transition-colors duration-500">
              Core Proficiencies
            </h3>

            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                progress={skill.progress}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Technical Icon Grid */}
          <div>
            <h3 className="text-2xl font-bold text-[--text-color] mb-6 transition-colors duration-500">
              Supporting Toolkit & Soft Skills
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-lg border border-[--border-color] hover:neon-shadow transition duration-300"
                >
                  <i className={`fas ${tool.icon} text-4xl ${tool.color} mb-1`}></i>
                  <span className="block text-sm text-[--text-color]">{tool.name}</span>
                </div>
              ))}
            </div>

            <p className="text-[--text-color]/80 text-lg leading-relaxed transition-colors duration-500">
              <strong>Soft Skills:</strong> My technical execution is supported by robust soft skills:{' '}
              <strong>Problem-solving</strong>, high <strong>Adaptability</strong> to new tech stacks, and strong{' '}
              <strong>Creativity</strong> in user interface development. I value <strong>Time Management</strong> and{' '}
              <strong>Leadership</strong> in project delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, progress, isVisible }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = progress / 100;
        const interval = setInterval(() => {
          current += increment;
          if (current >= progress) {
            current = progress;
            clearInterval(interval);
          }
          setCurrentProgress(Math.round(current));
        }, 15);

        return () => clearInterval(interval);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, progress]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 text-md font-medium">
        <span className="text-[--text-color] transition-colors duration-500">{name}</span>
        <span className="text-[--accent-color] transition-colors duration-500">{currentProgress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: isVisible ? `${progress}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;

