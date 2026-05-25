export const extractLastSegment = (url: string): string => {
  const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  const parts = cleanUrl.split('/');
  return parts[parts.length - 1];
};
