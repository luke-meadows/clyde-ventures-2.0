import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import { useRouter } from 'next/router';
export default function Header({ setShowSidebar, showSidebar }) {
  const [showHeaderSecondary, setShowHeaderSecondary] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 150) setShowHeaderSecondary(true);
    else setShowHeaderSecondary(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <HeaderPrimary />
      <AnimatePresence initial={true}>
        {showHeaderSecondary && (
          <HeaderSecondary
            path={router.asPath}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            key="header"
          />
        )}
      </AnimatePresence>
    </>
  );
}
