const generateItems = (limit: number) => {
  return Array.from({ length: limit }, (_, index) => index + 1);
};

export { generateItems };
