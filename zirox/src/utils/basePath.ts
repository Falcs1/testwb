// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Check if we're in production (GitHub Pages) or development
  const basePath = process.env.NODE_ENV === 'production' ? '/testwb' : '';
  return `${basePath}${path}`;
};