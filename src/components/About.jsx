import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, SquareTerminal } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SquareTerminal className="title-icon" size={32} /> ABOUT US
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-block glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="block-header">
              <BookOpen size={24} className="block-icon" />
              <h3>WHO WE ARE</h3>
            </div>
            <p className="block-body">
              "We are a team of passionate gamers united by one goal — to compete, dominate, and win.
Built on skill, strategy, and strong teamwork, we thrive in high-pressure situations.
Every player in our squad brings dedication, discipline, and a hunger to improve.
We believe in pushing limits, learning from every match, and coming back stronger.
Our journey is fueled by ambition and the desire to stand among the best.
Beyond the game, we are a community that supports, grows, and wins together.
We don’t just play — we perform, we adapt, and we conquer.
For us, e-sports is not just a game, it’s a lifestyle."
            </p>
          </motion.div>

          <motion.div
            className="about-block glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="block-header">
              <Flag size={24} className="block-icon" />
              <h3>Leadership</h3>
            </div>
            <div className="leadership-item">
              <h4>TEAM LEADERSHIP</h4>
              <p className="leadership-meta">"Leading the team with strategy, coordination, and a winning mindset."</p>
            </div>
            <div className="leadership-item">
              <h4>DECISION MAKING</h4>
              <p className="leadership-meta">"Making fast decisions under pressure to secure victory in every match."</p>
            </div>
            <p className="leadership-summary">
             "Driven by strategy and teamwork, our leadership ensures peak performance in every match. We thrive under pressure, making quick decisions that turn challenges into victories. With a winning mindset, we lead the team towards consistent success."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
