import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { headerVariant } from '../../framer-motion/variants';
import Logo from './Logo';
import NavIcon from './NavIcon';
export default function HeaderSecondary({ setShowSidebar, showSidebar, path }) {
  const [isOnHomepage, setIsOnHomepage] = useState(false);
  useEffect(() => {
    setIsOnHomepage(path === '/');
  }, []);
  return (
    <div>
      {isOnHomepage && (
        <StyledHeaderSecondary
          variants={headerVariant}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Logo width="8rem" variant={2} />

          <NavIcon setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </StyledHeaderSecondary>
      )}
      {!isOnHomepage && (
        <StyledHeaderSecondary>
          <Logo width="8rem" variant={2} />

          <NavIcon setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </StyledHeaderSecondary>
      )}
    </div>
  );
}

const StyledHeaderSecondary = styled(motion.header)`
  height: 5rem;
  background: white;
  padding: 0 5rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  border-bottom: var(--dark-grey);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
  p {
    margin-bottom: 0;
  }
  i {
    font-size: 1.2rem;
    color: var(--dark-grey);
  }
`;
