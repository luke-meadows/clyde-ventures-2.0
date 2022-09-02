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

import SidebarImageEducation from '../../public/sidebar-image-education.jpg';
import SidebarImageManufacturing from '../../public/sidebar-image-manufacturing.jpg';
import SidebarImageIntegration from '../../public/sidebar-image-integration.jpg';
import SidebarImageConsultation from '../../public/sidebar-image-consultation.jpg';
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
      {/* <motion.div
        className="image-container"
        variants={sidebarImageVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Image src={SidebarImageEducation} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className="image-container"
        variants={sidebarImageVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Image
          src={SidebarImageManufacturing}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="image-container"
        variants={sidebarImageVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Image src={SidebarImageIntegration} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className="image-container"
        variants={sidebarImageVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Image src={SidebarImageConsultation} layout="fill" objectFit="cover" />
      </motion.div> */}
      <motion.div
        variants={sidebarInnerVariant}
        initial="initial"
        animate="enter"
        exit="exit"
        className="sidebar-inner"
      >
        <h2>Menu</h2>
        <nav>
          <Link href="/">
            <a href="" onClick={() => setShowSidebar(false)}>
              What we do <i className="icon-angle-down" />
            </a>
          </Link>
          <Link href="/about">
            <a href="" onClick={() => setShowSidebar(false)}>
              About us
            </a>
          </Link>
          <Link href="/people">
            <a href="" onClick={() => setShowSidebar(false)}>
              People
            </a>
          </Link>
          <Link href="/people">
            <a href="" onClick={() => setShowSidebar(false)}>
              Community
            </a>
          </Link>
          <Link href="/contact">
            <a href="" onClick={() => setShowSidebar(false)}>
              Contact us
            </a>
          </Link>
        </nav>
        <div className="socials">
          <div className="i-container">
            <i className="icon-linkedin" />
          </div>
        </div>
      </motion.div>
    </StyledSideBar>
  );
}

const StyledSideBar = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 6rem;
  height: calc(100vh - 5rem);
  /* width: 100vw; */
  width: 25rem;
  display: flex;
  background: var(--white2);
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
  h2 {
    margin-left: 0;
    font-weight: 500;
  }
  nav {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    height: calc(100% - 10rem);
    a {
      font-size: 1.2rem;
      margin: 0.25rem 0;
      text-align: right;
    }
  }

  .image-container {
    position: relative;
    height: calc(100vh - 5rem);
    width: 20%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .sidebar-inner {
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 5rem;
    position: relative;
    text-align: right;
    .socials {
      position: absolute;
      right: 5rem;
      bottom: 3rem;
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        height: 2.4rem;
        width: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 1.1rem;
          color: var(--dark-grey);
          margin: 0;
          margin-left: 0.15rem;
        }
      }
    }
  }
`;
