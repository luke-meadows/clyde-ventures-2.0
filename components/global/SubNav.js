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
      <div className="sub-nav-inner">
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
      </div>
    </StyledSubNav>
  );
}

const StyledSubNav = styled(motion.div)`
  z-index: 3;
  .sub-nav-inner {
    height: fit-content;
    padding-bottom: 2rem;
    margin: 0 auto;
    max-width: 1610px;
  }
  nav {
    display: flex;
    width: fit-content;
    flex-direction: column;
    gap: 0.5rem;
    a {
      display: flex;
      align-items: center;
      color: var(--black);
      background: var(--yellow2);
      font-weight: 500;
      font-size: 0.8rem;
      padding: 0.5rem 0.8rem;
      border-radius: 0.3rem;
      flex: 1;
      &:hover {
        font-weight: 600;
      }
    }
  }
`;
