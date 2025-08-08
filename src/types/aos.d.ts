// TypeScript declarations for the AOS animation library.

// Declare the 'aos' module to have an implicit any type so TypeScript doesn't
// error during builds. Without this file, the Next.js TypeScript compiler
// fails because there is no @types/aos package available. See build logs for
// details.
declare module 'aos';

// Declare the CSS import for AOS. This allows importing the stylesheet
// ("aos/dist/aos.css") without TypeScript complaining about missing types.
declare module 'aos/dist/aos.css';