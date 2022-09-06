import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { headerVariant, headerVariant2 } from '../../framer-motion/variants';
import Logo from './Logo';
import NavIcon from './NavIcon';

export default function HeaderSecondary({ setShowSidebar, showSidebar }) {
  const [operatingSystem, setOperatingSystem] = useState('mac');

  useEffect(() => {
    if (navigator.userAgentData?.platform === 'macOS') {
      setOperatingSystem('mac');
    } else {
      setOperatingSystem('windows');
    }
  }, []);

  return (
    <Container operatingsystem={operatingSystem}>
      <StyledHeaderSecondary
        variants={headerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
        operatingsystem={operatingSystem}
      >
        <div onClick={() => setShowSidebar(false)}>
          <Logo width="8rem" variant={2} />
        </div>

        <NavIcon
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          useAnimation={true}
        />
      </StyledHeaderSecondary>

      <motion.div
        className="box-to-cover-scrollbar"
        variants={headerVariant2}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </Container>
  );
}

const Container = styled.div`
  .box-to-cover-scrollbar {
    height: 6rem;
    width: 17px;
    position: fixed;
    top: 0;
    right: 0px;
    z-index: 3;
    background: var(--white2);
  }
`;

const StyledHeaderSecondary = styled(motion.header)`
  background: var(--white2);
  padding: 0 5rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (props.isOnHomepage ? 'fixed' : 'relative')};
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) =>
    props.operatingsystem === 'mac' ? '100vw' : 'calc(100vw - 17px)'};
  z-index: 2;
  border-bottom: var(--dark-grey);
  box-shadow: rgba(0, 0, 0, 0.025) 0px 4px 12px;
  p {
    margin-bottom: 0;
  }
  i {
    font-size: 1.2rem;
    color: var(--dark-grey);
  }
  @media only screen and (max-width: 1170px) {
    padding: 0rem 2rem;
    width: 100vw;
  }
`;
