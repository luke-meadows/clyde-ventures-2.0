import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import { useRouter } from 'next/router';
export default function Header({ setShowSidebar, showSidebar }) {
  const [showHeaderSecondary, setShowHeaderSecondary] = useState(false);
  const [hidePrimary, setHidePrimary] = useState(true);
  const router = useRouter();
  const isOnHomepage = router.asPath === '/';

  const handleScroll = () => {
    if (!isOnHomepage) return;
    console.log('scrollTop: ', window.scrollY);
    if (window.scrollY > 150) setShowHeaderSecondary(true);
    else setShowHeaderSecondary(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });
  useEffect(() => {
    if (!isOnHomepage) {
      setHidePrimary(true);
      setShowHeaderSecondary(true);
    } else {
      setHidePrimary(false);
      setShowHeaderSecondary(false);
    }
  }, [router]);
  return (
    <>
      {!hidePrimary && <HeaderPrimary />}
      <AnimatePresence initial={true}>
        {showHeaderSecondary && (
          <HeaderSecondary
            path={router.asPath}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
