// src/components/Loader/Loader.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoaderSpinner = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  margin-bottom: 20px;
`;

const LoaderText = styled(motion.h2)`
  color: white;
  font-size: 1.5rem;
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpinner
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <LoaderText
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, 20],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading Portfolio...
      </LoaderText>
    </LoaderContainer>
  );
}

export default Loader;