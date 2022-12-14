import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { sidebarDropdownVariant } from '../../framer-motion/variants';
export default function SideBarServicesDropdown({ setShowSidebar }) {
  return (
    <StyledDropdown
      variants={sidebarDropdownVariant}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setShowSidebar(false)}
    >
      <Link href="/what-we-do/consultancy">
        <a className="dropdown-link" href="">
          Consultancy
        </a>
      </Link>
      <Link href="/what-we-do/integration">
        <a className="dropdown-link" href="">
          Integration
        </a>
      </Link>
      <Link href="/what-we-do/manufacturing">
        <a className="dropdown-link" href="">
          Manufacturing
        </a>
      </Link>
      <Link href="/what-we-do/education">
        <a className="dropdown-link" href="">
          Education
        </a>
      </Link>
    </StyledDropdown>
  );
}

const StyledDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .dropdown-link {
    font-size: 0.8rem !important;
    font-weight: 500;
    border-bottom: 1px solid var(--yellow2);
    width: fit-content;
    padding-right: 0.2rem;
  }
  @media only screen and (max-width: 900px) {
    .dropdown-link {
      font-size: 0.9rem !important;
    }
  }
`;
