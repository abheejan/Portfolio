// src/components/About/About.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: white;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primary-color);
    border-radius: 10px;
    top: 20px;
    left: 20px;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const AboutText = styled.div`
  flex: 1;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--dark-color);
  }

  p {
    margin-bottom: 15px;
    color: var(--gray-color);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const SkillItem = styled(motion.span)`
  background-color: #f1f1f1;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--dark-color);
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: green;
    transform: translateY(-2px);
  }
`;

function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'C++',
    'Java',
    'C',
    'MySQL',
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <AboutContent>
          <AboutImage>
            <motion.img
              src="/2.jpg" // Replace with your image
              alt="About Me"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </AboutImage>

          <AboutText>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A dedicated Full Stack Developer based in Lalitpur, Nepal
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am a Computer Engineering undergraduate from NCIT. I am very passionate about improving my coding skills & developing applications & websites.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I am learning and developing my skills to design a better and responsive websites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>My Skills:</h4>
              <SkillsList>
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ResumeButton 
                href="/abheejan.pdf" // Replace with your actual resume path
                download="abheejan.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </ResumeButton>
            </motion.div>
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  );
}

export default About;