// corsMiddleware.js
import cors from 'cors';

const corsMiddleware = cors({
  origin: 'https://vercel-project-kappa.vercel.app',
  credentials: true,
  // Other options...
});

export default corsMiddleware;
