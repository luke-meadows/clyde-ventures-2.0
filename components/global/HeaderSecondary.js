import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { headerVariant, headerVariant2 } from '../../framer-motion/variants';
import Logo from './Logo';
import NavIcon from './NavIcon';
export default function HeaderSecondary({ setShowSidebar, showSidebar, path }) {
  const [isOnHomepage, setIsOnHomepage] = useState(false);
  const [operatingSystem, setOperatingSystem] = useState('mac');

  useEffect(() => {
    setIsOnHomepage(path === '/');
    if (navigator.userAgentData?.platform === 'macOS') {
      setOperatingSystem('mac');
    } else {
      setOperatingSystem('windows');
    }
  }, []);
  return (
    <Container operatingSystem={operatingSystem}>
      {isOnHomepage && (
        <StyledHeaderSecondary
          variants={headerVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          operatingSystem={operatingSystem}
        >
          <Logo width="8rem" variant={2} />
          <NavIcon
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            operatingSystem={operatingSystem}
          />
        </StyledHeaderSecondary>
      )}
      {!isOnHomepage && (
        <StyledHeaderSecondary>
          <Logo width="8rem" variant={2} />

          <NavIcon setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </StyledHeaderSecondary>
      )}
      <motion.div
        className="box"
        variants={headerVariant2}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </Container>
  );
}

const Container = styled.div`
  .box {
    height: 6rem;
    width: 17px;
    position: fixed;
    top: 0;
    right: 0px;
    z-index: 3;
    background: var(--white);
  }
`;

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
  width: ${(props) =>
    props.operatingSystem === 'mac' ? '100%' : 'calc(100vw - 17px)'};
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
