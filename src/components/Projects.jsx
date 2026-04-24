import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, SwatchBook } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "OUR VISION",
    date: "DOMINATE THE ARENA",
    description: "We Aim To Rise As a Dominant Force In The E-sport World. Our Vision is To Complete At The Highest Level and Leave a Legacy Behind.",
    tags: ["Domination", "Legacy", "Future Champions"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  },
  {
    title: "OUR MISSION",
    date: "PLAY WITH PURPOSE",
    description: "Our Mission is To Train Hard, Stay Focused, and Perform At Our Peak. We Believe In Discipline, Consistency, And a Mindset Built To Win.",
    tags: ["Discipline", "Focus", "Winning Mindset"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  },
  {
    title: "TEAM WORK",
    date: "STRONGER TOGETHER",
    description: "Success Comes From Trust, Coordination, And Strong Communication. Together, We Play Smarter, Fight Harder, And Win as One.",
    tags: ["Unity", "Coordination"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  },
  {
    title: "SKILL & GROWTH",
    date: "LEVEL UP DAILY",
    description: "We Constantly Push Our Limits to Improve Every Single Day. Learning, Adapting, and Envolving Is What Keeps Us Ahead Of The Game.",
    tags: ["LevelUp", "Improvement"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  },
  {
    title: "COMPETITIVE SPIRIT",
    date: "HUNGER TO WIN",
    description: "We Enter Every Match With Passion And The Hunger To Win. Pressure Doesn't Break us - It Makes Us Stronger.",
    tags: ["Passion", "No fear", "Grind"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  },
  {
    title: "COMMUNITY",
    date: "GROW TOGETHER",
    description: "We Are More Than a Team - We Are a Growing Gaming Family. Supporting Each Other, We Build a Strong And United Community.",
    tags: ["squad", "support", "gaming family"],
    link: "https://linkedin.com/in/aomkar-nath-chuhan"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SwatchBook className="title-icon" size={32} /> Our Vision
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass-panel interactive"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-cap"></div>
              <div className="project-content">
                <span className="project-date">{project.date}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <button className="project-link-btn">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
