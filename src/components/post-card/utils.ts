import formatDistance from 'date-fns/formatDistance';

export const postCardCreated = (createdUtc: number): string => {
  const currentDate = new Date();
  const postDate = new Date(createdUtc * 1000);

  return formatDistance(postDate, currentDate, { addSuffix: true });
};
