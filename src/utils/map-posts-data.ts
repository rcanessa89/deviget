export const mapPostData = (
  children: Array<{ [key: string]: any }>
): { [key: string]: any } => {
  const value: { [key: string]: any } = {};

  children.forEach((c) => value[c.data.id] = c.data);

  return value;
};
