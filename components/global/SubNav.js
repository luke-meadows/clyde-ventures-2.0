import Link from 'next/link';
import styled from 'styled-components';
import { headerVariant, navOptionsVariant } from '../../framer-motion/variants';
import { motion } from 'framer-motion';
export default function SubNav() {
  return (
    <StyledSubNav
      variants={headerVariant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.nav
        variants={navOptionsVariant}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Link href="/what-we-do/consultancy" alt="Consultancy Page">
          <a href="">
            Consultancy
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/integration" alt="Integration Page">
          <a href="">
            Integration
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/manufacturing" alt="Manufacturing Page">
          <a href="">
            Manufacturing
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/education" alt="Education Page">
          <a href="">
            Education
            <i className="icon-angle-right" />
          </a>
        </Link>
      </motion.nav>
    </StyledSubNav>
  );
}

const StyledSubNav = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  padding-bottom: 2rem;
  z-index: 3;
  nav {
    display: flex;
    width: fit-content;
    flex-direction: column;
    a {
      margin: 0 1.2rem 0.2rem 0;
      width: fit-content;
      display: flex;
      align-items: center;
      color: var(--black);
      font-weight: 500;
      font-size: 0.8rem;
      &:hover {
        font-weight: 600;
      }
    }
  }
`;
