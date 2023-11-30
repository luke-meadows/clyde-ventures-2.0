export const sidebarVariant = {
  initial: {
    x: '100%',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.5 },
  },
};
export const sidebarImageVariant = {
  initial: {
    x: '-100%',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100%',
    transition: { duration: 0.5 },
  },
};

export const sidebarInnerVariant = {
  initial: {
    opacity: 0,
    x: '-10%',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.35,
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
export const sidebarDropdownVariant = {
  initial: {
    height: 0,
    opacity: 0,
    marginBottom: 0,
  },
  enter: {
    height: 'initial',
    opacity: 1,
    marginBottom: '.5rem',
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    marginBottom: 0,

    transition: { duration: 0.5, type: 'spring' },
  },
};

export const headerVariant = {
  static: {
    y: '0',
  },
  initial: {
    y: '-100%',
  },
  enter: {
    y: '0',
    transition: {
      duration: 0.5,
      // when: 'beforeChildren',
    },
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.3 },
  },
};
export const navOptionsVariant = {
  initial: {
    opacity: '0',
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.2,
      when: 'afterParent',
    },
  },
  exit: {
    opacity: '0',
    transition: { duration: 0.1 },
  },
};
