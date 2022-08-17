import styled from 'styled-components';
import { enableScroll, disableScroll } from '../../lib/scroll';
import { motion } from 'framer-motion';
import {
  sidebarImageVariant,
  sidebarInnerVariant,
  sidebarVariant,
} from '../../framer-motion/variants';
import Link from 'next/link';
import { useEffect } from 'react';
import SidebarImage from '../../public/sidebar-image.jpg';
import Image from 'next/image';

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
        className="image-container"
        variants={sidebarImageVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Image
          src={SidebarImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          loading="eager"
        />
      </motion.div>
      <motion.div
        variants={sidebarInnerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
        className="sidebar-inner"
      >
        <h1>Menu</h1>
        <nav>
          <Link href="/">
            <a href="" onClick={() => setShowSidebar(false)}>
              Services <i className="icon-angle-down" />
            </a>
          </Link>
          <Link href="/">
            <a href="" onClick={() => setShowSidebar(false)}>
              About us
              {/* <i className="icon-angle-right" /> */}
            </a>
          </Link>
          <Link href="/">
            <a href="" onClick={() => setShowSidebar(false)}>
              Blog
              {/* <i className="icon-angle-right" /> */}
            </a>
          </Link>
          <Link href="/people">
            <a href="" onClick={() => setShowSidebar(false)}>
              People
              {/* <i className="icon-angle-right" /> */}
            </a>
          </Link>
          <Link href="/">
            <a href="" onClick={() => setShowSidebar(false)}>
              Contact us
              {/* <i className="icon-angle-right" /> */}
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
  height: calc(100vh - 5rem);
  width: 100vw;
  display: flex;
  background: var(--white);
  z-index: 2;
  color: var(--dark-grey);
  overflow: hidden;
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
    font-size: 3rem;
    font-weight: 500;
  }
  nav {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    a {
      font-size: 1.4rem;
      margin: 0.25rem 0;
    }
  }

  .image-container {
    position: relative;
    height: calc(100vh - 5rem);
    width: 50%;
  }
  .sidebar-inner {
    width: 50%;
    padding: 0rem 5rem;
  }
`;
