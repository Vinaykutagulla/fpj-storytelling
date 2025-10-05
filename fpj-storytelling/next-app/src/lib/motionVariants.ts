// Centralized reusable Framer Motion variants
// Keep variants pure (no closures over component state). Parameterize where needed.
import { Variants } from 'framer-motion';

export const makeFadeUp = (y: number = 24, duration: number = 0.6, ease: string = 'easeOut'): Variants => ({
  hidden: { opacity: 0, y },
  show: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration, ease, delay: customDelay }
  })
});

export const simpleFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const staggerParent = (stagger: number = 0.14, delayChildren: number = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const scaleIn = (scaleFrom: number = 0.85): Variants => ({
  hidden: { opacity: 0, scale: scaleFrom },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay }
  })
});

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 24 },
  show: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

// Utility for sequencing a list of children with incremental delays
export const sequenceDelays = (base: number, step: number, count: number): number[] => (
  Array.from({ length: count }, (_, i) => base + i * step)
);
