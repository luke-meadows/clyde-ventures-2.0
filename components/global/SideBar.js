import styled from 'styled-components';
import { enableScroll, disableScroll } from '../../lib/scroll';
import { motion } from 'framer-motion';
import {
  sidebarInnerVariant,
  sidebarVariant,
} from '../../framer-motion/variants';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SideBar({ setShowSidebar }) {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  });

  return (
    <StyledSideBar
      variants={sidebarVariant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={sidebarInnerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <h1>Menu</h1>
        <nav>
          <Link href="/">
            <a href="">
              Services <i className="icon-plus-squared-alt" />
            </a>
          </Link>
          <Link href="/">
            <a href="">
              About us <i className="icon-angle-right" />
            </a>
          </Link>
          <Link href="/">
            <a href="">
              Blog <i className="icon-angle-right" />
            </a>
          </Link>
          <Link href="/people">
            <a href="">
              People <i className="icon-angle-right" />
            </a>
          </Link>
          <Link href="/">
            <a href="">
              Contact us <i className="icon-angle-right" />
            </a>
          </Link>
        </nav>
      </motion.div>
    </StyledSideBar>
  );
}

const StyledSideBar = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 6rem;
  height: calc(100vh - 6rem);
  width: 30vw;

  /* CHANGE */
  /* width: fit-content; */
  background: var(--white);
  z-index: 2;
  color: var(--dark-grey);
  overflow-y: scroll;
  padding: 2rem;
  i {
    margin-left: -0.2rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: var(--teal);
    }
  }
  h1 {
    margin-left: 0;
  }
  nav {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    a {
      font-size: 1.4rem;
    }
  }
`;
