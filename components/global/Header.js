import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import { useRouter } from 'next/router';
export default function Header({ setShowSidebar, showSidebar }) {
  const [showHeaderSecondary, setShowHeaderSecondary] = useState(false);
  const handleScroll = () => {
    console.log('scrollTop: ', window.scrollY);
    if (window.scrollY > 150) setShowHeaderSecondary(true);
    else setShowHeaderSecondary(false);
  };
  const router = useRouter();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(router.asPath);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <>
      <HeaderPrimary />

      <AnimatePresence initial={false}>
        {showHeaderSecondary && (
          <HeaderSecondary
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
