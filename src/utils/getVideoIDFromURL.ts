export const getVideoIDFromURL = (url: string): string => {
  const hardSplit = url.split('watch?v=')[1];
  const softSplit = hardSplit.split('&')[0];
  return softSplit;
};
